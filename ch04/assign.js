// 기본 할당 연산자
// 우향을 좌항에 대입한다
let a = 10;

// 복합 대입 연산자 (const 사용시 에러)
console.log(a += 2); // 12, a = a + 2
console.log(a -= 2); // 10, a = a - 2
console.log(a *= 2); // 20, a = a * 2
console.log(a /= 2); // 10, a = a / 2
console.log(a %= 2); // 0, a = a % 2
console.log(a **= 2); // 0,a = a ** 2