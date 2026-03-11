const student = {
    name : "이랑",
    age : 17,
    isStudent : true
}; // object라고 함

student.age = 7;

// student = {} 
// TypeError: Assignment to constant variable. 
// 같은 변수를 다른 오브젝트로 변경은 불가능.

console.log(student)