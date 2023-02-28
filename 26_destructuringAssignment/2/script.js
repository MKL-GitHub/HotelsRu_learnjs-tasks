function topSalary(salaries) {
    let user;

    for (let [key, value] of Object.entries(salaries)) {
        if (!user || user.value < value) user = {key, value};
    }

    return user ? user.key : null;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

alert( topSalary(salaries) );