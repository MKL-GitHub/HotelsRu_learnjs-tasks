let str = "Привет";

str.test = 5;

alert(str.test);  // Выдаст ошибку или undefined.

// Такой код работать не будет, поскольку при обращении к свойству 
// примитива создается объект-обертка и после этого он удаляется,
// то-есть примитив все также остается примитивом.