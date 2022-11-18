const postService = require("../services/PostService");

// 전체 게시글 조회
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ data: posts, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 게시글 생성
exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 특정 게시글 조회
exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 게시글 수정
exports.updatePost = async (req, res) => {
  try {
    const post = await postService.updatePost(req.params.id, req.body);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 게시글 삭제
exports.deletePost = async (req, res) => {
  try {
    const post = await postService.deletePost(req.params.id);
    res.json({ data: post, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
