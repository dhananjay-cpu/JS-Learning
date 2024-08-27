function asycFunction(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data");
            resolve("Success");
        }, 2000);
    })
}

function asycFunction1(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("Success");
        }, 2000);
    })
}

function asycFunction2(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("Success");
        }, 2000);
    })
}

async function getData(){
    console.log("Hello!.. Everyone:)");
    await asycFunction();
    await asycFunction1();
    await asycFunction2();
}

getData();
// console.log("Data fetching...");
// asycFunction().then((res) => {
//     console.log("Data1 fetching...");
//     return asycFunction1()
// }).then((res) => {
//     console.log("Data2 fetching...");
//     return asycFunction2()
// }).then((res) => {
//     console.log(res);
    
// })
















// const getPromise = () => { 
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("Success");
//         // reject("Network error")
//     })
// }

// let promise = getPromise();

// promise.then((res) =>{
//     console.log("Promise resolved", res); 
// })

// promise.catch((err) =>{
//     console.log("Promise has been rejected due to ", err);
    
// })


// console.log("Hello!.. User1");
// console.log("Hello!.. User2");
// setTimeout(() => {
//     console.log("Display after 3 seconds");
// }, 3000);
// console.log("Hello!.. User3");
// console.log("Hello!.. User4")

// function myData(dataId, getDetail){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success")
//             if (getDetail){
//                 getDetail();
//             }
//         }, 10000);
//     })
// }

// getData();