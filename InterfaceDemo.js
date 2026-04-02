"use strict";
var emp = {
    empName: "lala",
    empId: 101,
    empSal: 50000,
    dispData() {
        console.log(this.empName + " " + this.empId + " " + this.empSal);
    },
};
console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSal);
emp.dispData();
