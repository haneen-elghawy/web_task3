const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: Number, required: true }, 
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
