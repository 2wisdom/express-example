// mongoose 불러오기
const mongoose = require("mongoose");

// Schema 생성
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// model 을 export 해주기
module.exports = User = mongoose.model("user", UserSchema);
