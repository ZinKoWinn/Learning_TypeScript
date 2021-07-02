abstract class Employee {
    name: string;
    paymentPerHour: number;
    constructor(name: string, paymentPerHour: number) {
        this.name = name;
        this.paymentPerHour = paymentPerHour;
    }

    abstract calculateSalary(): number;
}

class Contractor extends Employee {
    workingHour: number;
    constructor(name: string, paymentPerHour: number, workingHour: number) {
        super(name, paymentPerHour);
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
       return this.paymentPerHour * this.workingHour;
    }
}

class FullTimeEmployee extends Employee{

    constructor(name:string,paymentPerHour:number) {
        super(name,paymentPerHour);
    }
    
    calculateSalary(): number {
       return this.paymentPerHour * 8;
    }
    
}

let con = new Contractor('Zin Ko Winn',20000,7);
console.log(con.calculateSalary());
console.log();

let emp = new FullTimeEmployee('Khin Suu Suu Nwe',10000);
console.log(emp.calculateSalary());