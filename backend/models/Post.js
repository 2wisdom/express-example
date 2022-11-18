const mongoose = require("mongoose");

const UserSchema = require("./User");

const PostSchema = new mongoose.Schema({
  // name: {
  //   type: mongoose.Types.ObjectId,
  //   required: true,
  //   ref: "user",
  // },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  // createAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updateAt: {
  //   type: Date,
  // },
});

module.exports = Post = mongoose.model("post", PostSchema);
