interface IEmployee {
  empName: string;
  empId: number;
  empSal: number;
  dispData: () => void;
}

var emp: IEmployee = {
  empName: "lala",
  empId: 101,
  empSal: 50000,
  dispData(): void {
    console.log(this.empName + " " + this.empId + " " + this.empSal);
  },
};

console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSal);

emp.dispData();

// -------------------------------------------------------------------------

interface I1 {
  a: number;
  b: number;
  sum(): number;
}

interface I2 extends I1 {
  x: number;
  y: number;
  sub(): number;
}

class C1 implements I2 {
  a: number;
  b: number;
  x: number;
  y: number;

  sum(): number {
    return this.a + this.b;
  }

  sub(): number {
    return this.x - this.y;
  }
}

var c = new C1();
c.a = 100;
c.b = 600;
c.x = 800;
c.y = 500;

console.log(c.sum());
console.log(c.sub());
