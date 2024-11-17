const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");

const { OAuth2Client } = require("google-auth-library");
const oauth2Client = new OAuth2Client();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/task", taskRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
