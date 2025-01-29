const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://amanofficial0108:XyT9TCZ53hXfMjrN@cluster0.cdyu3.mongodb.net/cluster0"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todo", todoSchema);

module.exports = todos;
