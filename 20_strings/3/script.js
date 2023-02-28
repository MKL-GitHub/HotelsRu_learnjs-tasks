function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;

    return str.slice(0, maxlength - 3) + "...";
}

let str1 = truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
let str2 = truncate("Всем привет!", 20);

alert(str1);
alert(str2);