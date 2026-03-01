const express = require("express");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");

const app = express();
const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/", indexRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});