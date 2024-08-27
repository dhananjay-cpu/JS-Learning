let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let div = document.getElementById("box1");
let box2 = document.getElementById("box2");
const img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let circle = document.getElementById("circle");
let mode = document.getElementById("mode");
let currMode = 'light';


// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log("Client axis: ", e.clientX, e.clientY);
//     console.log("Screen axis: ", e.screenX, e.clientY);
//     console.log(e.target);
//     console.log(e.type);
// }

btn2.ondblclick = (e) =>{
    console.log(e);
    console.log("Client axis: ", e.clientX, e.clientY);
    console.log("Screen axis: ", e.screenX, e.clientY);
    console.log(e.target);
    console.log(e.type);
}

div.onmouseover = (e) =>{
    console.log(e);
    console.log("Client axis: ", e.clientX, e.clientY);
    console.log("Screen axis: ", e.screenX, e.screenY);
    console.log(e.target);
    console.log(e.type);
}

// btn3.onclick = () => {
//    img1.src = "IMG/On.gif";
// }


btn3.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        btn3.innerHTML = "Off";
        img1.src = "IMG/On.gif";
    }
    else{
        currMode = "light";
        btn3.innerHTML = "On";
        img1.src = "IMG/off.gif";
    }
    console.log(currMode);
})

let Evt1 = () => {
    console.log("HELLO EveryOne!...1x");
}

btn1.addEventListener("click", Evt1)

let Evt2 = () => {
    console.log("HELLO EveryOne!...2x");
}

btn1.addEventListener("click", Evt2)

let Evt3 = () => {
    console.log("HELLO EveryOne!...3x");
}

btn1.addEventListener("click", Evt3)

let Evt4 = () => {
    console.log("HELLO EveryOne!...4x");
}

btn1.addEventListener("click", Evt4)

btn1.removeEventListener("click", Evt3)


mode.addEventListener('click', () =>{
    if(currMode === 'light')
    {
        currMode = 'dark';
        circle.style.backgroundColor="black";
    }
    else{
        currMode = 'light';
        circle.style.backgroundColor="white";
    }
    console.log(currMode);
} )