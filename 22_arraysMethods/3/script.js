function filterRangeInPlace(arr, a, b) {
    let filtered = [];
    
    arr.forEach(item => {
        if (item >= a && item <= b) filtered.push(item);
    });
    
    arr.length = 0;
    filtered.forEach(item => arr.push(item));
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );