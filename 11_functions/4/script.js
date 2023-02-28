function pow(x, n) {
    return x ** n;
}

let number = prompt("Введите число", "");
let power = prompt("Введите степень", "");

if (power < 1) {
    alert(`Степень ${power} не поддерживается, введите натуральное число`);
}
else {
    alert(`${number} в степени ${power} равно ${pow(number, power)}`);
}