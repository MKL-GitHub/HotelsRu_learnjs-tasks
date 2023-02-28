let calculator = {
    read() {
        this.firstNumber = +prompt("Введите первое число", "");
        this.secondNumber = +prompt("Введите второе чило", "");
    },

    sum() {
        return this.firstNumber + this.secondNumber;
    },

    mul() {
        return this.firstNumber * this.secondNumber;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );