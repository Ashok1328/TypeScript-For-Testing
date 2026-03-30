var person_age: number = 30;

if (person_age > 18) {
  console.log("Eligible For Vote");
} else {
  console.log("Not Eligible For Vote");
}

// ------------------------------------------------------

let num: number = 15;

if (num % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// ------------------------------------------------------

var a: number = 15;
var b: number = 30;
var c: number = 45;

if (a > b && a > c) {
  console.log("a is largest");
} else if (b > a && b > c) {
  console.log("b is largest");
} else {
  console.log("c is largest");
}

// ---------------------------------------------------------

var x: number = 200;
var y: number = 100;

//syn : expression ? statement1:statment2

x > y ? console.log("x is largest") : console.log("y is largest");
