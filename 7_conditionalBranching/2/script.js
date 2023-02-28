const OFFICIAL_JS_NAME = "ECMAScript";

let officialJSName = prompt("Какое официальное название JavaScript", "");

if (officialJSName == OFFICIAL_JS_NAME) {
    alert("Верно!");
}
else {
    alert(`Не знаете?\n"${OFFICIAL_JS_NAME}"`);
}