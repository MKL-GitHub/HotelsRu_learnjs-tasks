let user = {
    name: "Василий Иванович",
    age: 35,
};

let json = JSON.stringify(user);
let parsedJson = JSON.parse(json);

alert(json);
alert(parsedJson);