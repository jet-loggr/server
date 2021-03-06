const route = require("express").Router();
const { authenticate } = require("../../common/authentication");
const models = require("../../common/helpers");
const Moment = require("moment");

const DATE_FORMAT = "MMMM D, YYYY";
const DATE_TIME_FORMAT = "MMMM D, YYYY - hh:mm A";
const WEEK_DAYS_FORMAT = "MMM D (ddd)";

// @route    /api/flights
// @desc     POST adding a flight
// @Access   Private
route.post("/", authenticate, async (req, res) => {
  const { id } = req.decoded;

  if (req.body.approaches && isNaN(req.body.approaches)) {
    res.status(400).json({ message: "Please supply a numerical value for the approaches count field."});
  } else if (req.body.legs && isNaN(req.body.legs)) {
    res.status(400).json({ message: "Please supply a numerical value for the leg count field."});
  } else if (req.body.day_landings && isNaN(req.body.day_landings)) {
    res.status(400).json({ message: "Please supply a numerical value for the day landing count field."});
  } else if (req.body.night_landings && isNaN(req.body.night_landings)) {
    res.status(400).json({ message: "Please supply a numerical value for the night landing count field."});
  } else if (req.body.duration && isNaN(req.body.duration)) {
    res.status(400).json({ message: "Please supply a numerical value (in hour units) for the duration field."});
  } else {
    try {
      const [addedId] = await models.add("flights", { ...req.body, user_id: id });
      res.status(201).json({ message: "Flight was added", flight_id: addedId });
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } 
});

// @route    /api/flights
// @desc     GET all flights
// @Access   Private
route.get("/", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    let flights = await models.findAllByWithAircraft(id);
    flights = flights.map(flight => ({
      ...flight,
      date: Moment(flight.date).format(DATE_FORMAT),
      duty_on: Moment(flight.duty_on).format(DATE_TIME_FORMAT),
      duty_off: Moment(flight.duty_off).format(DATE_TIME_FORMAT)
    }));

    res.status(200).json(flights);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/flights/pie-chart
// @desc     GET all flights aggregated by aircraft
// @Access   Private
route.get("/pie-chart", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    const flights = await models.aggregatedChart(id);

    const totalFlightsCount = flights.reduce((a, b) => a + Number(b.count), 0);

    const retFlights = flights.map(flight => ({
      ...flight,
      percentage: Math.round((Number(flight.count) / totalFlightsCount) * 100 * 100) / 100
    }));

    res.status(200).json(retFlights);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route     /api/flights/line-graph
// @desc      GET daily count of all flights by user in current week
// @Access    Private
route.get("/line-graph", authenticate, async(req, res) => {
  const { id } = req.decoded;

  try {
    let nextDate = Moment().subtract(8, "days");

    let flightCounts = await models.findDailyFlightHourCountsInCurrentWeek(id);
    flightCounts = flightCounts.filter(row => Moment(row.date).isAfter(nextDate))
                                .map(row => ({
                                  date: Moment(row.date).format(WEEK_DAYS_FORMAT),
                                  count: row.count
                                }));

    const dailyFlightHoursInCurrentWeek = Array(7).fill().map((el, i) => {
      nextDate = Moment(nextDate).add(1, "day");

      return {
        date: Moment(nextDate).format(WEEK_DAYS_FORMAT),
        count: 0
      };
    });

    flightCounts.forEach(row => {
      for (let i = 0, len = dailyFlightHoursInCurrentWeek.length; i < len; i++) {
        if (row.date === dailyFlightHoursInCurrentWeek[i].date) {
          dailyFlightHoursInCurrentWeek[i] = {
            date: dailyFlightHoursInCurrentWeek[i].date,
            count: row.count
          }
          break;
        }
      }
    });

    const retCountsObj = {};
    dailyFlightHoursInCurrentWeek.forEach(day => {
      retCountsObj[day.date] = day.count;
    });

    res.status(200).json(retCountsObj);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

route.get("/totals", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    const totals = await models.findTotalFlightInformation(id);
    res.status(200).json(totals);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/flights/:id
// @desc     GET one flights
// @Access   Private
route.get("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

  try {
    const flight = await models.findAllByWithAircraftByUser(id, user_id);
    flight.date = Moment(flight.date).format(DATE_FORMAT);
    flight.duty_on = Moment(flight.duty_on).format(DATE_TIME_FORMAT);
    flight.duty_off = Moment(flight.duty_off).format(DATE_TIME_FORMAT);

    res.status(200).json(flight);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/flights/:id
// @desc     PUT one flights
// @Access   Private
route.put("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

  if (req.body.approaches && isNaN(req.body.approaches)) {
    res.status(400).json({ message: "Please supply a numerical value for the approaches count field."});
  } else if (req.body.legs && isNaN(req.body.legs)) {
    res.status(400).json({ message: "Please supply a numerical value for the leg count field."});
  } else if (req.body.day_landings && isNaN(req.body.day_landings)) {
    res.status(400).json({ message: "Please supply a numerical value for the day landing count field."});
  } else if (req.body.night_landings && isNaN(req.body.night_landings)) {
    res.status(400).json({ message: "Please supply a numerical value for the night landing count field."});
  } else if (req.body.duration && isNaN(req.body.duration)) {
    res.status(400).json({ message: "Please supply a numerical value (in hour units) for the duration field."});
  } else {
    try {
      const updatedFlightId = await models.update(
        "flights",
        { user_id, id },
        { ...req.body }
      );
  
      if (updatedFlightId) {
        res.json({
          message: "Flight Updated successfully",
          flight_id: updatedFlightId
        });
      } else {
        res.status(400).json({ message: "Failed to update flight" });
      }
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  }
});

// @route    /api/flights/:id
// @desc     DELETE one flights
// @Access   Private
route.delete("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

  try {
    const deletedFlight = await models.remove("flights", { id, user_id });
    if (deletedFlight) {
      res.status(200).json({ message: "Flight deleted successfully" });
    } else {
      res.status(400).json({ message: "Failed to delete flight" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = route;
