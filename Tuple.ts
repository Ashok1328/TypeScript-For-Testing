// var empId: number = 101;
// var empName: string = "Javed";
// var empSal: number = 500000;

// Declare Tuple
//var employee = [101, "Javed", 500000]

var employee: [number, string, number] = [101, "Javed", 500000];
console.log(employee);

// ------ Adde Elements in Tupe = push ------------

let employees: [number, string, number] = [101, " Javed ", 500000];
console.log("Original tuple: " + employees);
employees.push(102, " Ali ", 600000);
console.log("After adding new elements : " + employees);

// **** Remove elements from tuple

employees.pop();
console.log("After removing elements: " + employees);

// ******  Update element in Tuple ***********

var student: [number, string] = [101, "Beast"];
student[1] = "Bhai";
console.log(student);

// ***** Tuple Array **************

var students: [number, string][];
students = [
  [101, "SitaRam"],
  [102, "HariRam"],
  [103, "RamaRam"],
];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
