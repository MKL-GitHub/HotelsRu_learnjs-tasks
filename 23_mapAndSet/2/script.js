function aclean(arr) {
    let result = [];
    let sortedWords = [];

    for (let word of arr) {
        let sortedWord = word
            .split("")
            .sort()
            .join("")
            .toLowerCase();

        if (!sortedWords.includes(sortedWord)) {
            result.push(word);
            sortedWords.push(sortedWord);
        }
    }

    return result;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );