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




