"use strict";
class Employee {
    eId;
    eName;
    deptNo;
    setData(eId, eName, deptNo) {
        this.eId = eId;
        this.eName = eName;
        this.deptNo = deptNo;
    }
    display() {
        console.log(this.eId);
        console.log(this.eName);
        console.log(this.deptNo);
    }
}
var emp = new Employee();
// emp.eId = 102;
// emp.eName = "John Fukcin Rai";
// emp.deptNo = 102;
emp.setData(101, "John Fukcin Rai", 12);
emp.display();
