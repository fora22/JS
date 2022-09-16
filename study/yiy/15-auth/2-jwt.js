const jwt = require("jsonwebtoken");

const secret = "9hnMDQwPHyTJ1KQTh1TR9k%tw&lqy$5q*@ZgMzgNE1";
// 정말 필수적인 데이터만 넣기
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  { expiresIn: 2 }
);

// console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTM0NDQ1NX0.L5zizhP5nPgSZOA0ys3gADd-3K4hIQc8c0tVLgD2txg

// jwt.io에서 임의로 변경한 토큰 값
const edited =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IllJWSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjEzNDQ0NTV9.tK8MvPFih1wkwRG9prg0DPIasApP9t91lmgeY-NYsSE";

// 내부에서 생성한 경우엔 확인할 수 있었지만, 외부에서 임의로 변경한 코드는 signature가 변경되기 때문에 invalid signature 에러가 발생
// 내부 코드 생성 -> 외부에서 확인 : 가능 But, 외부 코드 변경 -> 내부에서 확인 : 불가능
// JsonWebTokenError: invalid signature
jwt.verify(edited, secret, (error, decoded) => {
  console.log(error, decoded);
});

console.log(token);

// 만료시간 지정 이후에 호출할 경우, TokenExpiredError: jwt expired
setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token); // undefined
