function unique(arr) {
    uniqueStrings = [];

    arr.forEach(item => {
        if (!uniqueStrings.includes(item)) {
            uniqueStrings.push(item);
        }
    });
    
    return uniqueStrings;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );