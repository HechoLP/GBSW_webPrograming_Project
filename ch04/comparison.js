let a = 10;
let b = 20;

console.log(a > b);     // F
console.log(a == b);    // F
console.log(a != b);    // T

//  'A' 에서 'Z' 로 갈수록 아스키코드 값이 커진다.
console.log("A" < "B")  // T
console.log("ABCD" > "ABDC")    // F

let size1 = 1024;;
let size2 = "1024";

console.log(size1 == size2);    // T
console.log(size1 === size2);   // F

let age = 17;
let result = age >= 19 ? "성인입니다." : "더 자라렴 ㅋ";
console.log(result);