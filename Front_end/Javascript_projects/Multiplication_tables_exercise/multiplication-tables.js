let number = 9;
for (x = 1; x <=10; x++) {
    const result = number * x;
    console.log(`${number} * ${x} = ${result}`);
}

//bonus
for (number = 1; number <= 10; number++) {
    for (x = 1; x <=10; x++) {
        const result = number * x;
        console.log(`${number} * ${x} = ${result}`);
    }
}