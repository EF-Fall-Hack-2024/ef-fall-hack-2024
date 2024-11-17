const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({});
});

router.post("/", async (req, res) => {
  try {
    const { projectId, description, priority } = req.body;
    const task = await Task.create({ projectId, description, priority });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
