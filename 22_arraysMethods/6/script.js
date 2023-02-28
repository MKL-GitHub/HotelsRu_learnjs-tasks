function Calculator() {
    this.cases = {};

    this.calculate = (str) => {
        let items = str.split(" ");
        let mistake = "Ошибка!\nВыражение некорректно!";

        if (isNaN(+items[0]) || isNaN(+items[2])) return mistake;

        this.cases["+"] = (a, b) => { return (+a + +b); };
        this.cases["-"] = (a, b) => { return (+a - +b); };

        if (!this.cases[items[1]]) return mistake;

        return this.cases[items[1]](items[0], items[2]);
    }

    this.addMethod = (name, func) => {
        this.cases[name] = func;
    }
}

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 - 3");

alert( result ); 