const isLogin = true;
const isAdmin = false;

// &&(And) 연산 -> 모든 항이 참이여야 true 반환
console.log(isLogin && isAdmin);    // F

// ||(Or) 연산 -> 둘 중 하나만 참이여도 true 반환
console.log(true || false);
console.log(false || true);


let id = "dlfkd1007";
let pw = "qwer";
let correctId = "dlfkd1007";
let correctPw = "wow_this_is_verrrry_perfact";

let result = (id == correctId && pw == correctPw) ? "로그인 되었습니댜." : "아이디 또는 비밀번호가 틀렸습니다.";

console.log(result);

console.log(!true);
console.log(!null);

// ?? - Nullish 병합 연산자
// data ?? default -> data가 null이거나 undefined인 경우, default를 반환.
let email = "dlfkd@gmail.com"
let result2 = (email !== null && email !== undefined) ? "이메일 확인" : "이메일이 입력되지 않음";
let result3 = (email ?? null) ? "이메일 확인" : "이메일이 입력되지 않음";

console.log(result2)
console.log(result3)
console.log(null ?? "기본값")
console.log(undefined ?? "기본값")
console.log("안녕하세요" ?? "기본값")