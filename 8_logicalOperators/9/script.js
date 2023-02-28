let userName = prompt("Кто там?", "");

if (userName) {
    if (userName == "Админ") {
        let userPassword = prompt("Пароль?", "");

        if (userPassword) {
            if (userPassword == "Я Главный") {
                alert("Здравствуйте!");
            }
            else {
                alert("Неверный пароль");
            }
        }
        else {
            alert("Отменено");
        }
    }
    else {
        alert("Я вас не знаю");
    }
}
else {
    alert("Отменено");
}