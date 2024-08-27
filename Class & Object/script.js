let body = document.querySelector("body");
let btn = document.getElementById("btn");
let currMode = "Light";

btn.addEventListener("click", () => {
    if(currMode === 'Light'){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btn.innerHTML = "Light";
        currMode = "Dark"
    }
    else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerHTML = "Dark";
        currMode = "Light"
    }
})

class college{
    constructor(name, studClass){
        this.colName = name;
        this.className = studClass;
        console.log("This is College Class Container");
        
    }

    jrCollege(){
        console.log("This is a Junior College!...");
    }
}

class student extends college{
    constructor(){
        super(college);
        console.log("Student Constructor!...");
    }
}

let student1 = new student("RCP", "HSC");
let college1 = new college("RCP", "HSC");
// let student2 = new student();





















