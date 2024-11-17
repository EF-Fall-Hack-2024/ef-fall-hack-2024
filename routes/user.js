const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/:id", (req, res) => {});

router.post("/create", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(400).json({ err: "User already exists" });
  } else {
    const new_user = await User.create({ firstName, lastName, email });
    res.status(200).json(new_user);
  }
});

module.exports = router;
