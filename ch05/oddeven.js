import readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("정수를 입력하세요. : ", function(num){
    /*  입력받은 num이 짝수인 경우 "짝수입니다."
        홀수인경우 "홀수입니다." 출력후 종료 */
    if (num % 2 == 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
    rl.close();
});