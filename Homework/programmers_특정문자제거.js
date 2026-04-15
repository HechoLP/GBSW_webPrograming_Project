function solution(my_string, letter) {
    let temp = "";
    for (let i of my_string){
        for (let j of letter)
            if (i != j){
                temp += i
            }
    }
    return temp;
}