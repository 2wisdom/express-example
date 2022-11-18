const { default: mongoose } = require("mongoose");
const PostModel = require("../models/Post");

// 전체 게시글 조회
exports.getAllPosts = async () => {
  return await PostModel.find();
};

// 게시글 생성
exports.createPost = async (post) => {
  return await PostModel.create(post);
};

// 특정 게시글 조회
exports.getPostById = async (postId) => {
  const _id = new mongoose.Types.ObjectId(postId);
  return await PostModel.findOne({
    _id: _id,
  });
  // .populate("name")
};

// 게시글 수정
exports.updatePost = async (postId) => {
  const _id = new mongoose.Types.ObjectId(postId);
  return await PostModel.findByIdAndUpdate({
    _id: _id,
  });
};

// 게시글 삭제
exports.deletePost = async (postId) => {
  return await PostModel.findByIdAndDelete(postId);
};
