// Arithemetic Operators

// let a = 10;
// let b = 5;

// console.log("a =", a, "& b =", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);


// Loops:- 

// print Hello World! 5 times

// for(let i = 1; i <= 5; i++)
//     {
//         console.log("Hello World!");
//     }


// let strVar = "Chandresh Prajapati";
// let size = 0;
// for (const i of strVar) {
//     console.log(i);
//     size++;
// }
// console.log("Size of given String is = ", size);

// let student = {
//     name: "Jayan",
//     surname: "Ribadiya",
//     age: 21,
//     ispass: true
// }

// for(let key in student){
//     console.log(key, "=", student[key]);
// }


// print even numbers between 0 to 100

// for(let i = 0; i <= 100; i++){
//     if (i % 2 == 0){
//         console.log("Even Numbers between 0 to 100 = ", i);
//     }
// }

// let num = 25;

// let guess = prompt("Guess the number: ")

// while (guess != num) {
//     guess = prompt("You guess wrong, Enter the number: ");
// }
// console.log("Congratulations, You got it");

// let str = "Dhananjay";
// let str1 = "Deore"
// console.log(str);
// console.log(str1);
// console.log(str.trim());

// let name;
// name = prompt("Enter your FullName")
// // console.log("@" + name + name.length);
// console.log(username);
// let username = "@" + name + name.length

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);

// for(i of marks) {
//     console.log(i);
// }

// // str = "Jayan";

// // for(let i=0; i<str.length; i++) {
// //     console.log(str.charAt(i));
// // }

// // for (const i in str) {
// //     console.log(str.charAt(i));
// // }

// let x = null;
// console.log(typeof(x));

// let marks = [85, 97, 44, 37, 76, 60];
// console.log(marks);
// var sum = 0;
// for (let i of marks) {
//     console.log(i);
//     sum += i
// }
// console.log("Average marks of the class = ", sum/marks.length);

// let average = sum/marks.length;
// console.log(`Average marks of the class = ${average}`);

// let prices = [250, 645, 300, 900, 50];
// for(i of prices) {
//     let offer = i - i/10;
//     console.log(offer);
// }
// for(let i = 0; i < prices.length; i++)
// {
//     offer = prices[i] - (prices[i] /= 10);
//     console.log(i+ "=" + offer);
// }

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// console.log(companies);

// // Remove the first company from the array
// console.log(companies.shift());
// console.log(companies);

// // Remove Uber and add Ola in its place
// console.log(companies.splice(1, 1, "Ola"));
// console.log(companies);

// // Add Amazon at the end
// console.log(companies.push("Amazon"));
// console.log(companies);

// ---------------------------------------------------Functions & Methods------------------------------------------------------------------


// function myFunction() {
//     console.log("Hello Everyone!");
//     console.log("Welcome to our JavaScript Tutorial");
//     console.log("Thank you :)");
// }
// myFunction();

// function abc(msg, num){ 
//     console.log(msg * num); //It returns NaN
// }

// abc("Jayan", 100);


// function sum(x, y) {
//     x = parseInt(prompt("Enter a value for x: "))
//     y = parseInt(prompt("Enter a value for y: "))
//     s = x + y
//     // console.log("Sum is = ", s);
//     return s;
// }
// let val = sum();
// console.log(val);

// function vowel(str) {
//     str = prompt("Enter any string: ")
//     let x = 0;
//     for(let j=0; j<str.length; j++) {
//         if(str[j] === "a" || str[j] === "e" || str[j] === "i" || str[j] === "o" || str[j] === "u") {
//             x++;
//         }
        
//     }
//     console.log(x);    
// }
// vowel();
// ------------------ Arrow Function -------------------------------

// let xyz = (x, y) => {
//     console.log("Sum is = ", x + y);
//     console.log("Multiplication is = ", x * y);
// }

// xyz(7, 3);

// const abc = (a, b) => {
//     console.log("Multiplication is = ", a * b);
//     // return a * b;
// }
// abc(6, 4);

// let vowel = (str) => {
//     str = prompt("Enter any string: ");
//     let count = 0;
//     for(let val of str) {
//         if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u")
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowel();


// let cities = ["pune", "nashik", "mumbai", "delhi"]
// // let num = [1, 2, 3, 4, 5, 6, 7]
// num.map((val) => {
//     console.log(val.toUpperCase());
// })


// let arr = [10, 20, 30, 40, 50];
// let input = prompt("Enter value to create an array seperated by comma: ");
// arr = input.split(",");
// console.log(arr);


// arr.forEach((val) => {
//     let square = val * val;
//     console.log(square);
// })


// let input = prompt("Enter the array elements seperated by comma: ")
// let marks = input.split(",");
// console.log(marks);

// let output = marks.filter((val) => {
//     return val > 90; 
// });


// console.log(output);


// let n = parseInt(prompt("Enter any number"))
// let arr = [];
// for(i = 1; i <= n; i++) {
//     console.log(i);
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
//   })

// console.log(sum);


// let mul = arr.reduce((prev, curr) => {
//     return prev * curr;
// })

// console.log(mul);

// let arr = [1, 2, 3, 4]
// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(sum);
// let res = 0;
// for(val of arr){
//     res += val;
// }
// console.log(res);
// -------------------------- DOM ----------------------------------------------


// let header = document.getElementById("myId");
// console.dir(header);
// console.log(header);

// let headings = document.getElementsByClassName("heading");
// console.log(headings);
// console.dir(headings);

// let tags = document.getElementsByTagName("p");
// console.log(tags);
// console.dir(tags);


// let tagdiv = document.querySelector("div");
// console.log(tagdiv);
// console.dir(tagdiv);

// let tag = document.querySelector("h2")
// console.log(tag);
// console.dir(tag);
// tag.innerText = tag.innerText + " from Apna College students";


// console.log(tag.innerText);


// let divtags = document.querySelectorAll(".box");
// console.log(divtags);
// console.dir(divtags);
// let x = 0;
// for(val of divtags) {
//     x++;
//     val.innerText = `Jayan ${x}`;
//     console.log(val.innerText);
// }
    
// let flag = document.createElement("h1");
// console.log(flag);
// flag.innerHTML = "<i>Hello, I'm new</i>";
// document.querySelector(".box").after(flag);

let btn = document.createElement("button");
console.log(btn);
btn.innerText = "Click Me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let bodytag = document.querySelector("body").prepend(btn)


let parag = document.querySelector("p");
console.log(parag);

parag.classList.add("mypara");















