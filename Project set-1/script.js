let buttons = document.querySelectorAll(".divs")
console.log(buttons);
let body = document.querySelector("body")
console.log(body);

buttons.forEach(button => {
    console.log(button);    
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === "div1"){
            body.style.backgroundColor = "orange";
        }
        else if(e.target.id === "div2"){
            body.style.backgroundColor = "white"
        }
        else if(e.target.id === "div3"){
            body.style.backgroundColor = "blue"
        }
        else if(e.target.id === "div4"){
            body.style.backgroundColor = "green"
        }
        else if(e.target.id === "div5"){
            body.style.backgroundColor = "grey"
        }
    })
});