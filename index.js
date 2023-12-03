const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/userRouter");
const postController = require("./controllers/postController");

mongoose.connect(
  "mongodb+srv://<USER>:<PASSWORD>@cluster0.oimmgw7.mongodb.net/parking?retryWrites=true&w=majority"
);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.get("/posts", postController.getAllPosts)
app.delete("/posts/:postId", postController.deletePost)
app.post("/posts", postController.createPost)
app.get("/posts/:id", postController.getPost)

app.listen(3001, () => {
  console.log("Rulandoooooooo");
});
