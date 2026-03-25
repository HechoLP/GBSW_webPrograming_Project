for (let i = 2; i <= 9; i++) {
    console.log(`-----${i}단-----`)
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log("-----------")

let i = 2;
while (i <= 9) {
    console.log(`-----${i}단-----`)
    let j = 1;
    while (j <= 9) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}

