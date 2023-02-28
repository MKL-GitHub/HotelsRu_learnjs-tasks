function randomInteger(min, max) {
    let result = Math.random() * (max - min) + min;
    
    return Math.trunc(result);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );