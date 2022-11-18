// express 불러오기
const express = require("express");
const connectDB = require("./config/db");

const postRouter = require("./routes/PostRoutes");

// app 생성
const app = express();
// PORT 번호 기본값 5000으로 설정
const PORT = process.env.PORT || 5000;

// allow us to get the data in requeset.body
app.use(express.json({ extended: false }));

// Define Routes
app.use(require("./routes/api/register"));
app.use(postRouter);

// get요청시 "API Running" 을 response 해주기
app.get("/", (req, res) => {
  res.send("API Running");
});

// Connect DB
connectDB();

// 첫번째 인자로 PORT 번호
// 두번째 인자로 callback 함수를 통해 server 구축 성공시 console log
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
