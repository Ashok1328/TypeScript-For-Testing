"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    empNo;
    constructor(empNo, name) {
        super(name);
        this.empNo = empNo;
    }
    displayData() {
        console.log(this.empNo);
        console.log(this.name);
    }
}
var emp = new Employee(101, "Lucy");
emp.displayData();
