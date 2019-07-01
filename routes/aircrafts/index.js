const route = require("express").Router();
const { authenticate } = require("../../common/authentication");
const models = require("../../common/helpers");

// @route    /api/aircrafts
// @desc     POST adding an aircraft
// @Access   Private
route.post("/", authenticate, async (req, res) => {
  const user_id = req.decoded.id;

  try {
    const [addedAircraft] = await models.add("aircrafts", {
      ...req.body,
      user_id
    });
    if (addedAircraft) {
      res.status(201).json({ message: "Aircraft added successfully" });
    } else {
      res.status(400).json({ message: "Failed to add aircraft" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/aircrafts
// @desc     GET all aircrafts
// @Access   Private
route.get("/", authenticate, async (req, res) => {
  const user_id = req.decoded.id;

  try {
    const aircrafts = await models.findAllBy("aircrafts", { user_id: user_id });
    res.status(200).json(aircrafts);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/aircrafts
// @desc     GET one aircraft
// @Access   Private
route.get("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

  try {
    const aircrafts = await models.findBy("aircrafts", { user_id, id });
    res.status(200).json(aircrafts);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/aircrafts/:id
// @desc     PUT one aircraft
// @Access   Private
route.put("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

  try {
    const updatedAircraftId = await models.update(
      "aircrafts",
      { user_id, id },
      { ...req.body }
    );

    if (updatedAircraftId) {
      res.json({
        message: "Aircraft Updated successfully",
        aircraft_id: updatedAircraftId
      });
    } else {
      res.status(400).json({ message: "Failed to update aircraft" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

// @route    /api/aircrafts/:id
// @desc     DELETE one aircraft
// @Access   Private
route.delete("/:id", authenticate, async (req, res) => {
  const user_id = req.decoded.id;
  const { id } = req.params;

  try {
    const deletedAircraft = await models.remove("aircrafts", { id, user_id });
    if (deletedAircraft) {
      res.status(200).json({ message: "Flight deleted successfully" });
    } else {
      res.status(400).json({ message: "Failed to delete flight" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = route;
