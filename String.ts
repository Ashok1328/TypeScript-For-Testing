let myString1 = "welcome";

var myString: string = "Welcome To TypeScript";

// ---------------- charAt() -------------------

console.log(myString.charAt(0));
console.log(myString.charAt(2));

// --------------  concat ----------------------

var str1: string = "Welcome";
var str2: string = " To TypeScript";
var str3: string = " and Protractor.";

console.log(str1.concat(str2));
console.log(str1.concat(str2).concat(str3));

// ------- replace -------------------

var str = "TypeScript Programming ";
console.log(str.replace("i", "x"));
console.log(str.replace("Type", "Java"));

// ---- split -------------------

var fruits: string = "Apple Banana Orange";

console.log(fruits.split(" "));
console.log(fruits.split(" ", 2));
console.log(fruits.split(" ", 1));

// --------- substring ------------------------

str = "Welcome";
console.log(str.substring(0, 3));
console.log(str.substring(2, 5));

// --------  toUpperCase()  &&  toLowerCase()

str = "TypeScript Programming";
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

// -------- trim -------------

str = "      welcome      ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
