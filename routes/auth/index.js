const route = require("express").Router();
const models = require("../../common/helpers");


// @route    /api/auth/register
// @desc     POST signing up/logging in a user
// @Access   Public
route.post("/register", async (req, res) => {
  const { name, email, image_url, nickname, sub } = req.body;

  if (!name || !email || !image_url || !nickname || !sub) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const exists = await models.findBy("users", { email, sub });

    if (exists) {
      return res.status(200).json(exists);
    }

    const [id] = await models.add("users", req.body);

    if (id) {
      const user = await models.findBy("users", { id });
      return res.status(200).json(user);
    }
  } catch ({message}) {
    return res.status(500).json({message});
  }
});

module.exports = route;