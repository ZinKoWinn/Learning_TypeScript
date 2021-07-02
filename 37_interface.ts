abstract class Toy {
    abstract play(): void;
}

abstract class Vehicle {
    abstract drive(): void;
}

class Drone extends Toy implements Flyable {

    constructor() {
        super()
    }

    play(): void {
        console.log('Drone is flying.');

    }

    fly(): void {
        console.log('Implemented Flyable interface');

        this.play();
    }
}

class Car extends Vehicle {

    constructor() {
        super()
    }

    drive(): void {
        console.log('Car is driving.');

    }

}

class Aeroplane extends Vehicle implements Flyable {
    constructor() {
        super();
    }

    drive(): void {
        console.log('Aeroplane is flying.');

    }

    fly(): void {
        console.log('Implemented Flyable interface');
        this.drive();
    }
}

interface Flyable {
    fly(): void;
}
let drone = new Drone();
drone.fly();
console.log();

let car = new Car();
car.drive();
console.log();

let areo = new Aeroplane();
areo.fly();
console.log();

// Interface Inheritance
/*
We can inherit the interface from the other interfaces.
In other words, Typescript allows an interface to be inherited from zero or more base types.
eg, child_interface extends parent interface{  
}  
*/

interface Person {
    name: string;
}

interface PersonDetail {
    age: number;
    gender: string;
    phone: string;
    email?: string;
    address: string;
}

interface Students extends Person, PersonDetail {

    showInfo(): void;
}

class ZKW implements Students {
    name: string;
    age: number;
    gender: string;
    phone: string;
    address: string;
    email?: string;

    constructor(name: string, age: number, gender: string, phone: string, address: string, email?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
    showInfo(): void {
        console.log(
            `Name : ${this.name}\nAge : ${this.age}\nGender : ${this.gender}\nPhone : ${this.phone}\nEmail : ${this.email}\nAddress : ${this.address}`
        );

    }
}

var obj = new ZKW('Zin Ko Winn',19,'Male','09123456789','zinko.developer@gmail.com','Yangon, Hlaing')
obj.showInfo();
