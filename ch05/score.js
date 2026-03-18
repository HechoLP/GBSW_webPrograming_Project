import readline from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("점수를 입력하세요. : ", function(score){
    /*
        100 ~ 91 점 - A학점
        81 ~ 90 점 - B작점
        71 ~ 80 점 - C작점
        61 ~ 70 점 - D작점
        51 ~ 60 점 - F작점
        그 외  - 범위를 벗어났습니다
    */
    if (score >= 91 && score <= 100) {
        console.log("A학점")
    } else if (score >= 81 && score <= 90) {
        console.log("B학점")
    } else if (score >= 71 && score <= 80) {
        console.log("C학점")
    } else if (score >= 61 && score <= 70) {
        console.log("D학점")
    } else if (score >= 51 && score <= 60) {
        console.log("F학점")
    } else {
        console.log("범위를 벗어났습니다.")
    }
    rl.close();
});