// 1.ways  to print javascript
// console.log("Hello world");
// document.write("this is javascript");
// alert("me");

//2.JavaScript console API
// console.log("Hello world", 4 + 6, "another log");
// console.warn("this is warning");
// console.error("This is an error");

//3. JavaScript Variables
//What are Variables? - containers to store data  values
var number1 = 34;
var number2 = 56;
// console.log(number1+number2);

// 4.Data Types in JavaScript
var num1 = 455;
var num2 = 56.76;

//string
var str1 = "This is a string";
var str2 = "This is also a string";

// objects
var marks = {
    ravi: 34,
    subham: 78,
    harry: 99.997
}
// console.log(marks);

//booleans
// var a = true;
// var b = false;
// console.log(a,b);

var und;
// console.log(und)

var n = null;
// console.log(n);

/*At a very high level, there are two types of data types in JavaScript 
1.primitive DataType:undefined, null, number, string, boolean, symbol
2.Reference data types: Arrays & object
*/

var arr = [1, 2, 3, "bablu", 4, 5]


//Operators in JavaScript

var a = 100;
var b = 10;
// console.log("The value of a+b:", a+b);
// console.log("The value of a+b:", a-b);
// console.log("The value of a+b:", a/b);
// console.log("The value of a+b:", a*b);

//Assignment operator: change one value to another
var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);


//comparison operator
var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

//Logical operators
// Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);

// Logical not
// console.log(!false);
// console.log(!true);

// function in javascript
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// conditionals in JavaScript
/*
var age = 4;
// single if statement
// if(age>18){
//     console.log("You are not a kid.");
// }

// if - else statement
// if(age>18){
//     console.log("You are not a kid.");
// }
// else{
//     console.log("You are a kid");
// }

// if-else Ladder
age = 34;
if(age>32){
    console.log("You are not a kid.");
}

else if(age>26){
    console.log("bachhe nahi rahe");
}
else if(age>22){
    console.log("yes bachhe nahi rahe");
}
else{
    console.log("tum bachhe ho");
}

console.log("End of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 8, 7.7, 9, 0, 6.7];
// console.log(arr);
// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })
//while loop
let j = 0;
//  while(j<arr.length){
//     console.log(arr[j]);
//     j++;
//  }

// do while loop
// do{
//     console.log(arr[j]);
//     j++;
// } while(j<arr.length);


//break & continue
// for (var i=0;i<arr.length;i++){
//     if(i==2){
//         break;
//     }
//     console.log(arr[i]);

// }

// for (var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i]);

// }

let myArr = ["Fan", "Camera", 34, null, true];

//Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Sayantan");
// myArr.shift();

// let newlwn = myArr.unshift("Sayantan");
// console.log("newlen");
// console.log(myArr);

// String Methods in Javascript

let mylovestring = "Sayantan is a  good boy good";
// console.log(mylovestring.length);

// console.log(mylovestring.indexOf("good"));
// console.log(mylovestring.lastIndexOf("good"));
// console.log(mylovestring.slice(0,3));

// d=mylovestring.replace("Sayantan","Harry");
// console.log(d,mylovestring);

// Dates in JavaScript
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// JavaScript DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);

// elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('button');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText="This is a created para" 
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText="This is a created bold" 
tn[0].replaceChild(createdElement2,createdElement);

//selecting using query
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);

function clicked(){
    console.log('The button was clicked');
}

window.onload = function(){
    console.log('The document was loaded');
}
//Events in JavaScript
firstContainer.addEventListener('click',function(){
    console.log("click hua");
})

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)
















