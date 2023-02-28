function readNumber() {
    while (true) {
        let number = prompt("Введите число", "");
        
        if (number === null || number === "") return null;
        
        if (!isNaN(+number)) return number;
    }
}

alert( readNumber() );