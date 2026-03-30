"use strict";
let myString1 = "welcome";
var myString = "Welcome To TypeScript";
// ---------------- charAt() -------------------
console.log(myString.charAt(0));
console.log(myString.charAt(2));
// --------------  concat ----------------------
var str1 = "Welcome";
var str2 = " To TypeScript";
var str3 = " and Protractor.";
console.log(str1.concat(str2));
console.log(str1.concat(str2).concat(str3));
// ------- replace -------------------
var str = "TypeScript Programming ";
console.log(str.replace("i", "x"));
console.log(str.replace("Type", "Java"));
// ---- split -------------------
var fruits = "Apple Banana Orange";
console.log(fruits.split(" "));
console.log(fruits.split(" ", 2));
console.log(fruits.split(" ", 1));
// --------- substring ------------------------
str = "Welcome";
console.log(str.substring(0, 3));
console.log(str.substring(2, 5));
