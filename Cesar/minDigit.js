function minDigit(x){
    min = 10;
    while (x > 0) {
        if (x % 10 < min)
            min =  x % 10;
        x = Math.floor(x / 10); 
    }
    return alert(min);
}

let x = prompt('Введите x', '');

minDigit(x);