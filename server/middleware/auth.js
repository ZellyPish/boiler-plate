const { User } = require("../models/User");

let auth = (req, res, next) => {
  // 인증 처리
  // client Cookie에서 token 가져오기
  let token = req.cookies.x_auth;

  // token 복호화 후 user 찾기
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
  // user 존재 시 인증 OK

  // 존재 X 인증 X
};

module.exports = { auth };
