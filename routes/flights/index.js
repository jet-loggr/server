const route = require("express").Router();
const { authenticate } = require("../../common/authentication");
const models = require("../../common/helpers");

// @route    /api/flights
// @desc     POST adding a flight
// @Access   Private
route.post("/", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    const [addedId] = await models.add("flights", { ...req.body, user_id: id });
    res.status(201).json({ message: "Flight was added", flight_id: addedId });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/flights
// @desc     GET all flights
// @Access   Private
route.get("/", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    const flights = await models.findAllByWithAircraft(id);
    res.status(200).json(flights);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/flights/aggregation
// @desc     GET all flights aggregated by aircraft
// @Access   Private
route.get("/pie-chart", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    const flights = await models.aggregatedChart(id);

    const totalCount = flights.rows.reduce((a, b) => a + Number(b.count), 0);

    const newFlights = flights.rows.map(f => {
      return {
        ...f,
        percentage: Math.round((Number(f.count) / totalCount) * 100 * 100) / 100
      };
    });

    res.status(200).json(newFlights);
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
    res.status(200).json(flight);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route     /api/flights/usage
// @desc      GET count of no. of times user flew each AC
// @Access    Private
route.get("/usage", authenticate, async (req, res) => {
  const user_id = req.decoded.id;

  try {
    const aircraftUsageFrequencies = await models.findAircraftUsageFrequencyCountsByUser(
      user_id
    );
    res.status(200).json(aircraftUsageFrequencies);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

// @route    /api/flights/:id
// @desc     PUT one flights
// @Access   Private
route.put("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

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
