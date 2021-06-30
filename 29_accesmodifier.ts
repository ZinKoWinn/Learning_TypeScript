/*
The TypeScript access modifiers are of three types. These are:

1.Public
2.Private
3.Protected.
*/

console.log('** Public assess modifier **');
console.log();

class Student {
    public name: string;
    public age: string;
    public phone: string;

    constructor(name: string, age: string, phone?: string) {
        this.name = name;
        this.age = age;
        this.phone = phone = 'Un Known';

    }

    greet(): void {
        console.log(`My name is ${this.name}, age is ${this.age} and phone number is ${this.phone}.`);
    }
}

let stu = new Student('Zin Ko Winn', '19');
stu.greet();
console.log();

stu.name = 'Khin Suu Suu Nwe';
stu.age = '21';
stu.phone = '09123456789';
stu.greet();
console.log();

console.log('Private Access Modifier');
console.log();

class Employee {
    private name: string;
    private age: string;
    #phone: string;

    constructor(name: string, age: string, phone?: string) {
        this.name = name;
        this.age = age;
        this.#phone = phone = 'Un Known';

    }

    greet(): void {
        console.log(`My name is ${this.name}, age is ${this.age} and phone number is ${this.#phone}.`);
    }
}

let emp = new Employee('Zin Ko Winn', '19');
stu.greet();
console.log();
// Compile Time Error
// Property '' is private and only accessible within class Employee.
// emp.name = 'Khin Suu Suu Nwe'; 
// emp.age = '21';
// emp.#phone = '09123456789';
emp.greet();
console.log();


console.log('Protected Access Modifier');
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}


class Dog extends Animal {
    #bark: string;
    constructor(name: string, bark: string) {
        super(name)
        this.#bark = bark;
    }


    public bark() {
        console.log(`I am a ${this.name} and I bark as ${this.#bark}`);
    }
}

var dog = new Dog('Net Kyaw', 'Woof Woof!')
dog.bark();
console.log();

//Readonly Modifier

class Company {
    readonly country: string;
    readonly name: string;

    constructor(country: string, name: string) {
        this.country = country;
        this.name = name;
    }

    public showDetails() {
        console.log(`Company Name : ${this.name}\nCountry : ${this.country}`);

    }
}
var com = new Company('Myanmar', 'Soft Engineering');
com.showDetails();