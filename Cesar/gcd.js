function gcd (a, b){
    while ((a != 0) && (b != 0))
        if (a > b){
            a %= b;
        } else {
            b %= a;
        }
    return a || b;    
}

let a = prompt('Введите a', '');
let b = prompt('Введите b', '');

alert(gcd(a, b));