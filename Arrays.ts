// ---- Array Declaration and Initilization

var fruits1: string[] = ["apple", "banana", "orange"];
// or

var fruits2: Array<string>; // declaration
fruits2 = ["apple", "banana", "orange"]; // initilization

console.log(fruits1);
console.log(fruits2);

// ***** Multi-Type Array ***************

var values: (string | number)[] = ["apple", 100, "orange", 10];
console.log(values);
// or

var values: Array<string | number> = ["banana", 100, "orange", 10];
console.log(values);

// ****** Access Array Elements *******************

var fruits: string[] = ["Mango", "Pears", "Watermelon"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// *** for loop ******************

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// *** for in operator ***********

for (var j in fruits) {
  console.log(fruits[j]);
}

// -------  2-D Array Declaratio and Initilization -------------------------------

var myArray: number[][] = [
  [10, 20],
  [20, 30],
  [40, 50],
];

console.log(myArray);

// *********** 2D multi-type array *****************

var myArray2: (string | number)[][] = [
  [10, "xyz"],
  ["abc", 100],
];
console.log(myArray2);

// ***** Access 2D  array element using loop ************

for (var i = 0; i < myArray2.length; i++) {
  for (var j = 0; j < myArray2[i].length; j++) {
    console.log(myArray2[i][j]);
  }
}
// ****** for in loop  *****

for (var x in myArray2) {
  for (var y in myArray2[x]) {
    console.log(myArray2[x][y]);
  }
}

// ***** for of loop ********

for (var row of myArray2) {
  for (var item of row) {
    console.log(item);
  }
}
