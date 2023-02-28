function getSalariesSum(obj) {
    let sum = 0;

    for (let prop in obj) {
        sum += obj[prop];
    }

    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

alert(getSalariesSum(salaries))