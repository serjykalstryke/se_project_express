const express = require("express");
const mongoose = require("mongoose");

const { NOT_FOUND } = require("./utils/errors");
const indexRouter = require("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "507f1f77bcf86cd799439011",
  };
  next();
});

app.use("/", indexRouter);

app.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Resource not found" });
});

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