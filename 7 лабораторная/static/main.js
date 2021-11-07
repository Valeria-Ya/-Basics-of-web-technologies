function initBoard(){
    let board = document.getElementById('board');
    for (let i=0; i < 9; i++){
        let boardCell = document.createElement('div');
        boardCell.classList.add('cell');
        board.append(boardCell);
    }
    return board;
}

function checkWinner() {
    let cells = document.querySelectorAll('.cell');
    let row, column, diag1, diag2;
    for (i = 0 ; i < 3 ; i++) {
        row =  (cells[i * 3].innerHTML != '');
        column = (cells[i].innerHTML !='');
        diag1 = (cells[0].innerHTML !='');
        diag2 = (cells[3-1].innerHTML !='');
        for (j = 0; j < 2; j++) {
            row = row && (cells[i * 3 + j].innerHTML) == (cells[i * 3 + j + 1].innerHTML);
            column = column && (cells[j * 3 + i].innerHTML) == (cells[(j + 1) * 3 + i].innerHTML);
            diag1 = diag1 && (cells[j*3+j].innerHTML) == (cells[(j + 1) * 3 + j +1].innerHTML);
            diag2 = diag2 && (cells[j*3 + (3-1)  -j].innerHTML) == (cells[(j + 1) * 3 + 3 - 1 - (j +1)].innerHTML);
        }
        if (row || column || diag1 || diag2)
           return true;
    }
}

let turn = 0;
let counter = 0;

function clickHandler(event) {
    counter++;
    if (event.target.className == 'cell') {
        if (event.target.innerHTML != '') 
            alert ('Клетка уже занята');
        else {
            event.target.innerHTML = turn == 0 ? 'x' : 'o';
            turn = (turn + 1) % 2;
        }
    }

    let winner = checkWinner();
    if (winner) {
        let a = turn == 0 ? 'o' : 'x';
        alert(a + ', you win!');
    }
    else if (counter==9)
        alert('Ничья');
}
function newGame(){
    let cells = document.querySelectorAll('.cell');
    for (let i = 0; i < 9; i++){
        cells[i].innerHTML = '';
    }
    counter = 0;
    turn = 0;
}

window.onload = function(){
    let board = initBoard();
    board.onclick = clickHandler;
    document.getElementById('new-game-btn').onclick = newGame;
}