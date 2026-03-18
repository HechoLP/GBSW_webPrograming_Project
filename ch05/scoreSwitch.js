import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. : ", function(score) {
    const numScore = Number(score);
    switch (true) {
        case (numScore >= 91 && numScore <= 100):
            console.log("A학점");
            break;
        case (numScore >= 81 && numScore <= 90):
            console.log("B학점");
            break;
        case (numScore >= 71 && numScore <= 80):
            console.log("C학점");
            break;
        case (numScore >= 61 && numScore <= 70):
            console.log("D학점");
            break;
        case (numScore >= 51 && numScore <= 60):
            console.log("F학점");
            break;
        default:
            console.log("범위를 벗어났습니다.");
    }
    rl.close();
});