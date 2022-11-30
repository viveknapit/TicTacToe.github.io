console.log("welcome to Tic Tac Toe")
let music = new Audio("resource/music.mp3")
let turn = new Audio("resource/ting.mp3")
let gameover = new Audio("resource/gameover.mp3")
let turn2 = "X"
let isgameover = false;
const changeTurn = ()=>{
    return turn2 ==="X"?"O": "X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

//game logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn2;
            turn2 = changeTurn();
            turn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "turn for " + turn2;
            }
        }
    })
})

// add onlick listner to reset button
reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn2 = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn2;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})