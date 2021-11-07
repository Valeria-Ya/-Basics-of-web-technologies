function cesar(str, shift, action) {
    let answer = ''; 
    if (action == "decode") 
        shift = 26 - shift;
    for (i = 0; i < str.length; i++) {
        if ((str[i] >= 'a') && (str[i] <= 'z')) {
            answer += String.fromCharCode((str[i].charCodeAt(0) - 97 + shift * 1) % 26 + 97);
        } else {
            answer += str[i];
        }
    }
    return alert(answer);
}

let str = prompt('Введите строку:', '');
let shift = prompt('Введите ключ', '');
let action = prompt('Введите action (encode/decode)', '');

cesar(str, shift, action);
