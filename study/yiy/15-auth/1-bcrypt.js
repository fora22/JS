const bcrypt = require("bcrypt");

const password = "abcd1234";
const hashed = bcrypt.hashSync(password, 10); // salt 10자리 + bcrypt 처리 비밀번호 (동기적 방식) 프로젝트에서는 hash(promise를 사용해야 하므로)
console.log(`password: ${password}, hashed: ${hashed}`); // salt 생성하는데 cpu를 사용하므로 지나치게 hash할 필요는 없음 보통 10~12

// 사용자 로그인 검사
const result = bcrypt.compareSync("abcd1234", hashed); // 서버에서는 비동기 방식인 compare 사용하는 것이 좋음
console.log(result);
