class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  empNo: number;

  constructor(empNo: number, name: string) {
    super(name);
    this.empNo = empNo;
  }

  displayData(): void {
    console.log(this.empNo);
    console.log(this.name);
  }
}

var emp = new Employee(101, "Lucy");
emp.displayData();

// --------------------------------------------------------------------------

class Bank {
  rateOfInterest: number = 0;

  roi(): number {
    return this.rateOfInterest;
  }
}

class BankX extends Bank {
  roi(): number {
    return 10.5;
  }
}

class BankY extends Bank {
  roi(): number {
    return 12.5;
  }
}

var x = new BankX();
console.log(x.roi());

var y = new BankY();
console.log(y.roi());
