// const URL = "http://localhost:3000/headers"
// // const URL = "https://9dc6-103-181-100-83.ngrok-free.app/forms"

// let para = document.querySelector("#para");
// let btn = document.querySelector("#btn");

// let getForms = async() => {
//     let response = await fetch(URL)
//     console.log(response);
//     let data = await response.json()
//     console.log(data);
//     para.innerText = data[0].text;
// }

// btn.addEventListener("click", getForms)


// let p = fetch("http://localhost:3000/forms")
// p.then((val1) => {
//     return val1.json()
// }).then((val2) => {
//     console.log(val2);
// })


// <!----------------------------------------------- GET REQUEST USING ASYNC AWAIT ----------------------------------------------------!>

// async function fetchData(){
//     try{
//         let response = await fetch("http://localhost:3000/forms")
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(e){
//         console.error("Something went wrong", e);
//     }
// }
// fetchData();  

async function fetchData(){
    let response = await fetch("http://localhost:3000/forms/c26bae9c551e4e2a")
    let data = await response.json();
    console.log(data);
}
fetchData();

// <!---------------------------------------- POST REQUEST ------------------------------------------!>

// let options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({ 
//         'form':{
//             'headers_attributes':[{

//             }]
//         }
//     })
// }

// fetch('http://localhost:3000/forms', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// async function putData(){
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             'form':{
//                 'headers_attributes': [{

//                 }]
//             }
//         })
//     }

//     let response = await fetch("http://localhost:3000/forms", options)
//     let data = await response.json();
//     console.log(data);
// }
// putData();

// <!------------------------------------------------------- PUT REQUEST ---------------------------------------------------------------- !>

// let options = {
//     method: "PUT",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({ 
//         'form':{
//             'emails_attributes':[{

//             }]
//         }
//     })
// }

// fetch('http://localhost:3000/forms/2fce5c1e2716fae1', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));
