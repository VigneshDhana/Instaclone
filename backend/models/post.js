const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  date: String,
  like: Number,
  image: String,
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
