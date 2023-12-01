const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRouter");

mongoose.connect(
  "mongodb+srv://<USER>:<PASSWORD>@cluster0.oimmgw7.mongodb.net/parking?retryWrites=true&w=majority"
);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Rulandoooooooo");
});
