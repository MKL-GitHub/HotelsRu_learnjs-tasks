function count(obj) {
    return Object.entries(obj).length;
}

let user = { 
    name: "John",
    age: 30
};

alert( count(user) );