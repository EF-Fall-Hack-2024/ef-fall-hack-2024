const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.get("/:task_id", async (req, res) => {
  const task_id = req.params.task_id;
  const task = await Task.findOne({ taskId: task_id });
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ msg: "Not found" });
  }
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
