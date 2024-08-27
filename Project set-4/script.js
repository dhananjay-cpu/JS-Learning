let lowOrHigh = document.querySelector(".lowOrHigh");
let previous = document.getElementById("p1");
let remain = document.getElementById("p2");
let lastremain = document.querySelector(".lastResult");
let num = document.getElementById("num");
let startOver = document.querySelector(".resultPara")

let p = document.createElement("p");
let rand = (Math.floor(Math.random()*100 + 1));
console.log(rand);
let form = document.querySelector("form");

let number;
let i = 1;
let preVal = [];
let playGame = true;

if(playGame = true){
    form.addEventListener("submit", function (e) {
        e.preventDefault()

        number = parseInt(num.value)
        console.log(number);
        validateGuess(number);
    })
}

function validateGuess(number){
    if(isNaN(number) || number < 1 || number > 100){
        alert("Please enter the valid number");
    }
    else{
        if(i === 11){
            displayGuess(number);
            displayMessage(`Game Over. The number was ${rand}`);
            endGame()
        }
        else{
            displayGuess()
            checkGuess()
        }
    }
} 
    
function checkGuess(){
    if(number == rand){
        displayMessage("Congratulations!, You guessed it right :)");
        endGame()
    }
    else if(number < rand){
        displayMessage("The number is too small");
    }
    else if(number > rand){
        displayMessage("The number is too large");
    }
}


function displayGuess(){
    num.value = ''
    previous.innerHTML += ` ${number}`;
    i++;
    lastremain.innerHTML = ` ${11 - i}`;
    
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    num.value = ''
    num.setAttribute('disabled', '')
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    let newBtn = document.querySelector("#newGame");
    newBtn.addEventListener("click", function (e) {
        rand = Math.floor(Math.random()*100 + 1);
        // preVal = [];
        preVal.innerHTML = '';
        i = 1;
        number.innerHTML = '';
        lastremain.innerHTML = `${11 - i}`;
        startOver.removeChild(p)
        num.removeAttribute("disabled")
        
        playGame = true;
    })
}

