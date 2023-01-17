let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' WON';
            isGameOver = true;
        }           
    })
}

//Game Logic

let box = document.getElementsByClassName('box');
Array.from(box).forEach(ele => {
    let event = ele.querySelector('.boxtext');
    ele.addEventListener('click', () => {
        if (event.innerText === "") {
            event.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X"
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})












