const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

router.post("/", (req, res) => {
  const { userId, projectId } = req.body;
  const project = Project.findOne({ userId, projectId });
  if (project) {
    res.json({ project });
  } else {
    res.json({ msg: "Not found" });
  }
});

module.exports = router;
