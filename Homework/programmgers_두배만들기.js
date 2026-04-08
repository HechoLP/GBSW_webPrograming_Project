function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++){
        // answer.push(numbers[i] * 2)
        numbers[i] *= 2
        // numbers[i] = numbers[i] << 1 // 비트연산자
    }
    // return answer;
    return numbers;
}