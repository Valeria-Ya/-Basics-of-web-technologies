function fibb(n) {
    a = 0;
    b = 1;
    if (n == 1) {
        return alert(a);
    } else if (n == 2) {
        return alert(b);
    } else {
        for (i = 2; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return alert(c);
    }
}

let n = prompt('Введите n', '');

fibb(n);