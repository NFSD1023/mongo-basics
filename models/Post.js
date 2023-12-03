const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.ObjectId, required: true, ref: 'user' },
    userLikes: [{ type: Schema.ObjectId, ref: 'user' }],
    visits: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
