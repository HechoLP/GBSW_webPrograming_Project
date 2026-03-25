//  1 ~ 10 내의 홀수만 출력하겠다.
let num = 0;
while (num < 10){
    num++;
    if (num % 2 === 0){
        continue;
    }
    console.log(num);
}1