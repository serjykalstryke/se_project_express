const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { NOT_FOUND } = require("./utils/errors");
const indexRouter = require("./routes/index");
const { login, createUser } = require("./controllers/users");

const app = express();
const { PORT = 3001 } = process.env;

app.use(cors());
app.use(express.json());

app.post("/signin", login);
app.post("/signup", createUser);

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