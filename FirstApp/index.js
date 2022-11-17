// express 불러오기
const express = require("express");

// express 실행
const app = express();

// 요청에 대한 동작
// (요청, 응답)
// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   //   res.send("HELLO, WE GOT YOUR REQUEST!");
//   res.send(`<h1>My WebPage!</h1>`);
// });

app.get("/", (req, res) => {
  res.send("This is the home page!");
});

app.get("/cats", (req, res) => {
  console.log("CAT REQUEST!");
  res.send("MEOW!!");
});

app.get("/dogs", (req, res) => {
  console.log("DOG REQUEST!");
  res.send("WOOF!!");
});

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(8080, () => {
  console.log("LISTEN ON PORT 8080!");
});
