// import required modules
const express = require("express");
const env = require("dotenv").config();
const path = require("path");
const indexRouter = require("./routers/indexRouter");
const messageRouter = require("./routers/messageRouter");

// app setup
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// static files middleware
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// routers middleware
app.use("/", indexRouter);
app.use("/message", messageRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
