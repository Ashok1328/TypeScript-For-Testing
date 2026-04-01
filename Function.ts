// Named Function

function display() {
  console.log("Welcome To TypeScript");
}

display();

// -------- Named Function include parameter types and return type --------------

function Sum(x: number, y: number): number {
  return x + y;
}
var rslt = Sum(50, 200);
console.log(rslt);

// ----- Anonymous Function ---------------------------

var greeting = function () {
  console.log("Welcome To TypeScript");
};
greeting();

// ---- Anonymous Function include paramter types and return type

var Sums = function (x: number, y: number): number {
  return x + y;
};
console.log(Sums(10, 20));

// --------- Function Parameter -----------------------------

function Greet(greeting: string, name: string): string {
  return greeting + " " + name;
}
console.log(Greet("Welcome", "Beast"));
console.log(Greet("Welcome")); // expected 2 but got one

// ------- Optional Parameter --------------------------

function Greets(greeting: string, name?: string): string {
  return greeting + " " + name;
}
console.log(Greets("Welcome", "Home"));
console.log(Greets("Welcome"));
console.log(Greets("Welcome", "Home", "Beast")); // expected 2 but got 3

// ----- Default Parameter -------------------------------

function Greett(name: string, greeting: string = "Hello"): string {
  return greeting + " " + name;
}
console.log(Greett("Beastay"));
console.log(Greett("Beastay", "John"));
console.log(Greett("Bhaii"));

// ----------- Fat Arrow Function -------------------

var sum = (x: number, y: number): number => x + y;
console.log(sum(50, 60));

// ----- Function Overloading --------------------

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
  return a + b;
}

console.log(add(50, 80));
console.log(add("Welcome ", " Home"));

// --- Function overloading with different number of parameter and types with same name is not supported

// function display(a: string, b: string): void {
//   console.log(a + b);
// }

// function display(a: number): void {
//   console.log(a + b);
// }

// ----- Rest Parameter -------------------

function greet(greetingmsg: string, ...name: string[]) {
  return greetingmsg + " " + name;
}

console.log(greet("Hello", "Abbu"));
console.log(greet("Hello"));
console.log(greet("Hello", "Bhai", "Samit"));

//--------------------------------------------------------
function summ(...nums: number[]): number {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  return total;
}

console.log(summ(10, 20, 30));
