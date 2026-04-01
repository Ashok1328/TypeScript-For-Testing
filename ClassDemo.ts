class Employee {
  eId: number;
  eName: string;
  deptNo: number;

  constructor(eId: number, eName: string, deptNo: number) {
    this.eId = eId;
    this.eName = eName;
    this.deptNo = deptNo;

    // setData(eId: number, eName: string, deptNo: number): void {
    //   this.eId = eId;
    //   this.eName = eName;
    //   this.deptNo = deptNo;
  }

  display(): void {
    console.log(this.eId);
    console.log(this.eName);
    console.log(this.deptNo);
  }
}

var emp = new Employee(101, "John Fukcin Rai", 12);
// emp.eId = 102;
// emp.eName = "John Fukcin Rai";
// emp.deptNo = 102;
// emp.setData(101, "John Fukcin Rai", 12);
emp.display();
