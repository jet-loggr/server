const route = require("express").Router();
const { authenticate } = require("../../common/authentication");
const models = require("../../common/helpers");

// @route    /api/users
// @desc     GET current user
// @Access   Private
route.get("/", authenticate, async (req, res) => {
  const { id } = req.decoded;

  try {
    const userInfo = await models.findBy("users", { id });
    res.status(200).json(userInfo);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

route.put("/", async (req, res) => {
  const { id } = req.decoded;

  try {
    await models.update("users", { id }, { ...req.body });
    res.status(200).json({ message: "User update successful." });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = route;