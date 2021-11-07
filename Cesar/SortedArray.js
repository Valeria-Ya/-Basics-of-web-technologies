function compare_name (a, b) {
    if (a.name < b.name) 
        return -1;
    if (a.name > b.name) 
        return 1;
    if (a.name == b.name)
        return 0;
}

function compare_age (a, b) {
    if (a.age < b.age) 
        return -1;
    if (a.age > b.age) 
        return 1;
    if (a.age == b.age)
        return 0;
}

function getSortedArray(array, key) {
    if (key == "name")
        array.sort(compare_name);
    else
        array.sort(compare_age);
    for (i = 0; i < array.length; i++) 
        alert ('name: ' + array[i].name + ', age: ' + array[i].age);
}

let array = [{name: 'Макар', age: 20}, {name: 'Роберт', age: 32}, {name: 'Екатерина', age: 50}, {name: 'Оксана', age: 24}, {name: 'Святослав', age: 43}];

getSortedArray(array, 'age');

// Пример работы функции.
// let array = [{name: 'Макар', age: 20}, {name: 'Роберт', age: 32}, {name: 'Екатерина', age: 50}, {name: 'Оксана', age: 24}, {name: 'Святослав', age: 43}];
// array = getSortedArray(array, 'age')
// console.log(array); // [{name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}, {name: 'Екатерина', age: 50}];
// array = getSortedArray(array, 'name')
// console.log(array); // [{name: 'Екатерина', age: 50}, {name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}];