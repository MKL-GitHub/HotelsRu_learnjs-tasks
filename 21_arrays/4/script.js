function sumInput() {
    let numbers = [];
    let numbersSum = 0;

    while (true) {
        let userNumber = prompt("Введите число", "");

        if (userNumber === "" || userNumber === null || isNaN(+userNumber)) break;

        numbers.push(+userNumber);
    }

    for (let i = 0; i < numbers.length; i++) {
        numbersSum += numbers[i];
    }

    return numbersSum;
}

alert( sumInput() );