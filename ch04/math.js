// 산술 연잔자 실습
const a = 10;
const b = 3;

console.log(a + b)  // 13
console.log(a - b)  // 7
console.log(a * b)  // 30
console.log(a / b)  // 3.3333333333333335
console.log(a % b)  // 1
console.log(a ** b) // 10000

// 연산자 하나가 String인 경우
const str = "hi";
const numStr = "10";

// + 연산자의 경우 String으로 형변관해 문자열을 이어 붙여준다.
console.log(str + b);   // hi3
console.log(numStr + b) // 103
// 이외 연산자는 Number로 형 변환해 연산을 시도한다
console.log(numStr - 3);
console.log(numStr * 3);
console.log(numStr / 3);
console.log(numStr % 3);
console.log(numStr ** 3);

// Number로 형 변환 실패 시 NaN (Not A Number) 반환
console.log(str / b)