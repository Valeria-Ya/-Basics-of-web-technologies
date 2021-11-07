function pow (x, n){
    st = x;
    for (i = 1; i < n; i++)
        x *= st;
    return alert(x);
}

let x = prompt('Введите x', '');
let n = prompt('Введите n', '');

pow(x, n);