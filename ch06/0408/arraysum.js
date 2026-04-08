function times(num) {
    return num * 2;
}

let result = times(3)
console.log(result)

const arr = [1,4,2,8,11,5];
let sum = 0 ;

arr.push(15)
for (let i = 0; i < arr.length; i++){
    sum += arr[i]
}

console.log(sum)