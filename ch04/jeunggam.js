let a, result;

// 1. 전위 증가 연산자 (++a)
a = 1;
result = ++a; 
console.log(a);      // 2
console.log(result); // 2 (증가된 후의 값이 할당됨)

// 2. 후위 증가 연산자 (a++)
a = 1;
result = a++; 
console.log(a);      // 2
console.log(result); // 1 (증가되기 전의 값이 할당됨)

// 3. 출력 비교
a = 2;
console.log(a++);    // 2 (출력 후 a는 3이 됨)

a = 2;
console.log(++a);    // 3 (3으로 증가시킨 후 출력)