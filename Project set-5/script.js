let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newGame = document.getElementById("newbtn");
let turn = "playerX";

const results = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


const btnenabel = () =>{
    for(let box of boxes){
        box.disabled = false;
        if(box.disabled === false){
            reset.classList.remove("hide1")
            newGame.classList.add("hide")
        }
    }
}
const btndisable = () =>{
    for(let box of boxes){
        box.disabled = true;
        if(box.disabled === true){
            reset.classList.add("hide1")
            newGame.classList.remove("hide")
        }
    }
}

boxes.forEach((box) => {
    btnenabel()
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turn === "playerX"){
            box.innerHTML = "X"
            turn = "playerO";
        }
        else{
            box.innerHTML = "O"
            turn = "playerX";
        }
        box.disabled = true
        checkWinner()
    })
})

const checkWinner = () => {
    for(let result of results){
        let resVal1 = boxes[result[0]].innerHTML;
        let resVal2 = boxes[result[1]].innerHTML;
        let resVal3 = boxes[result[2]].innerHTML;
        if (resVal1 != "" && resVal2 != "" && resVal3 != ""){
            if(resVal1 === resVal2 && resVal2 === resVal3){
                console.log(`Congratulations!... Player-${resVal1} is win this game`);
                btndisable()
            }
        }
    }
};


reset.addEventListener("click", () =>{
    for(let box of boxes){
        box.innerHTML = "";
        btnenabel()

    }
})


newGame.addEventListener("click", () =>{
    for(let box of boxes){
        box.innerHTML = "";
        btnenabel()
    }
})