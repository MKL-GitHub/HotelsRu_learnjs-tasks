let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2]();

// Массивы могут хранить разные типы данных, поэтому при добавлении
// функции в конец массива ошибки не произойдет.
// В итоге при обращении к последнему элементу массива, мы получем
// вывод на экран объекта этого массива.