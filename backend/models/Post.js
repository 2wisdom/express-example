const mongoose = require("mongoose");
const UserSchema = require("./User");

const PostSchema = new mongoose.Schema({
  name: {
    type: UserSchema,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
