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
exports.getPostById = async (id) => {
  return await PostModel.findById(id);
};

// 게시글 수정
exports.updatePost = async (id, post) => {
  return await PostModel.findByIdAndUpdate(id, post);
};

// 게시글 삭제
exports.deletePost = async (id) => {
  return await PostModel.findByIdAndDelete(id);
};
