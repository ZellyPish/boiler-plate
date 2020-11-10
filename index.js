const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

// application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://zelly:qrwe1423@boilerplate.fgowv.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 안녀어어어엉");
});

app.post("/register", (req, res) => {
  // 회원 가입시 필요한 정보들을 client에서 가져오면
  // 그것들을 database에 넣어준다

  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
