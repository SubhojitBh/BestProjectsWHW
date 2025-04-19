const form = document.querySelector('.form');
const inpfield = document.querySelector('.input');
const sub = document.querySelector('#button');
const arr = document.querySelector('.array');
const triesleft = document.querySelector('.triesrem');
const res = document.querySelector('.results');

let random = Math.round(Math.random()*99 + 1);

console.log(random)

// let array = [];
let triesrem = 10;

let playing = true;


if (playing) {
    sub.addEventListener('click', (e) => {
        e.preventDefault();
        if (!playing) return;
        // console.log(playing)
        const guess = parseInt(inpfield.value);

        validInput(guess);
    })
}

function validInput(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess) ) {
        inpfield.value ="";
        alert(" Enter a Valid Number")
    }
    else {
        checkInput(guess)
    }
}

function checkInput(guess) {
    if (guess === random) {
        updatevar(guess);
        display("Jeet Gayeee!!!!");

        playing = false;
        // console.log(playing)

        newGame();
    }

    else {
        updatevar(guess);
        const less = (guess < random);
        let msg = "Wrong Guess";
        if (less) msg += ", guess higher dude";
        else msg += ", guess lower dude";
        display(msg);
        if (triesrem <= 0) {
            endgame();
        }
    }
}

function display (str) {
    res.innerHTML = str;
}

function updatevar (guess) {
    triesrem--;
    triesleft.innerHTML = `${triesrem}`;
    inpfield.value ="";
    arr.innerHTML = arr.innerHTML + `${guess}` + ((triesrem <= 0 || guess === random) ? "." : ", ")
}

function endgame () {
    res.innerHTML = "Wrong Guess, Game Over";
    playing = false;

    newGame();
}

function newGame() {
    const div = document.createElement('span');
    div.style.backgroundColor = "green";
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.style.flexDirection = "column";

    div.innerHTML = "Start a New Game";
    div.addEventListener('click', (et) => {
        et.preventDefault();
        console.log("wow");
        playing = true;
        
        random = Math.round(Math.random()*99 + 1);
        triesrem = 10;
        arr.innerHTML = ">>";
        triesleft.innerHTML = 10;
    })
    res.appendChild(document.createElement('br'))
    res.appendChild(document.createElement('br'))
    res.appendChild(document.createElement('br'))
    res.appendChild(div);
}