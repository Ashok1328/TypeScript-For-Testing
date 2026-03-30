"use strict";
// Number
var first = 12.0;
var second = 0x37cf;
var third = 0o377;
var fourth = 0b111001;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
// ------------- String ---------------------------------
var empName = "Beast";
var empDept = "IT Department";
console.log(empName);
console.log(empDept);
var stmt = empName + " works in " + empDept;
console.log(stmt);
// -------------- Boolean -------------------------------
var b = true;
console.log(b);
// --------- void type ------------------
function hello() {
    console.log("This is a welcome message!!");
}
// -- Null - Null represents a variable whose value is undefined.
var num1 = null;
num1 = 100;
console.log(num1);
//--undefined
var num2 = undefined;
num2 = 200;
console.log(num2);
// -----Any type -----------------
var val = "Hi";
val = 100;
console.log(val);
val = false;
console.log(val);
function myFunction(x, y) {
    console.log(x + y);
}
myFunction(100, 200);
myFunction("Hi", "Welcome To The Gang");
