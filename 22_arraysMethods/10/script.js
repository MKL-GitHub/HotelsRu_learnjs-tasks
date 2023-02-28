function shuffle(array) {
    let shuffled = [];
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let random = Math.trunc(Math.random() * array.length);
        shuffled.push(array.splice(random, 1)[0]);
    }

    shuffled.forEach(item => array.push(item));
}

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);
