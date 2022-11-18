const exporess = require("express");
const router = exporess.Router();
const Post = require("../../models/Post");

// Index
router.get("/", (req, res) => {
  Post.find({})
    .sort("-createAt")
    .exec((err, posts) => {
      if (err) return res.json(err);
      //   res.render("posts/index", { posts: posts });
    });
});

// 게시물 생성 (post)
router.get("posts", (req, res) => {
  Post.create(req.body, (err, post) => {
    if (err) return res.json(err);
    res.redirect("/posts");
  });
});

// router.post("/posts", async (req, res, next) => {
//   const { title, contents } = req.body;

//   try {
//     if (!title || !contents) {
//       throw new Error("제목과 내용을 입력해 주세요");
//     }

//     const post = await Post.create({
//       title,
//       content,
//     });
//     res.redirect(`/posts/${postId}`);
//   } catch (err) {
//     next(err);
//   }
// });

// 특정 게시물 조회 (get)
router.get("/posts/:postId", (req, res) => {
  Post.findOne({ _postId: req.params.id }, (err, post) => {
    if (err) return res.json(err);
    // res.render("posts/show", { post: post });
  });
});

// 전체 게시물 조회 (get)

// 게시물 수정 (put)
router.put("/posts/:postId", (req, res) => {
  req.body.updatedAt = Date.now();
  Post.findOneAndUpdate(
    { _postId: req.params.postId },
    req.body,
    (err, post) => {
      if (err) return res.json(err);
      res.redirect(`/posts/${req.params.postId}`);
    }
  );
});

// 게시물 삭제 (delete)
router.delete("/posts/:postId", (req, res) => {
  Post.deleteOne({ _postId: req.params.postId }, (err) => {
    if (err) return res.json(err);
    res.redirect("/posts");
  });
});

// router.delete("/posts/:postId", async (req, res, next) => {
//   const { postId } = req.params;
//   await Post.deleteOne({ postId });
//   res.send("OK");
// });

module.exports = router;
