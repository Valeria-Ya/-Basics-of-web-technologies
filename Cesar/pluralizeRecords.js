function pluralizeRecords(n) {
    if (n % 10 == 1){
       return alert ("В результате выполнения запроса была найдена " + n + " запись");
    } else if ((n % 10 == 0) || ((n > 4) && (n < 20))) {
        return alert ("В результате выполнения запроса было найдено " + n + " записей");
    } else {
        return alert ("В результате выполнения запроса было найдено " + n + " записи");
    }
}

let n = prompt('Введите n', '');

pluralizeRecords(n);
