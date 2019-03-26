const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  description: String,
  content: String,
  thumbnail: String,
  createdTime: Date,
  updatedTime: Date,
  index: Number,
  highlight: Number,
  keywords: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categories" }
});

module.exports = mongoose.model("blogs", blogSchema);
