let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); 

keys.push("more");

alert(keys);

// Метод keys() возвращаят объект map, у которого нет метода push(),
// поэтому необходимо преобразовать объект map в array используя метод
// Array.from();