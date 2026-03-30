// Number

var first: number = 12.0;
var second: number = 0x37cf;
var third: number = 0o377;
var fourth: number = 0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// ------------- String ---------------------------------

var empName: string = "Beast";
var empDept: string = "IT Department";

console.log(empName);
console.log(empDept);

var stmt: string = empName + " works in " + empDept;
console.log(stmt);

// -------------- Boolean -------------------------------

var b: boolean = true;
console.log(b);

// --------- void type ------------------

function hello(): void {
  console.log("This is a welcome message!!");
}

// -- Null - Null represents a variable whose value is undefined.

var num1: number = null;
num1 = 100;
console.log(num1);

//--undefined

var num2: number = undefined;
num2 = 200;
console.log(num2);

// -----Any type -----------------

var val: any = "Hi";

val = 100;
console.log(val);

val = false;
console.log(val);

function myFunction(x: any, y: any) {
  console.log(x + y);
}

myFunction(100, 200);
myFunction("Hi " , " Welcome To The Gang");
