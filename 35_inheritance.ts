/*
* TypeScript Inheritance
class childClassName extends parentClassName  
{  
         methods and fields  
{  
*/
// Parent class
class Car {
    gear: number;
    constructor(gear: number) {
        this.gear = gear;
    }

    drive(): void {
        console.log(`Car is driving with gear number ${this.gear}`);

    }

}

// Child class
// The relationship between the two classes is Is a Relationship
// Truck is a Car. It means Truck is a type of Car.
class Truck extends Car {
    constructor(gear: number) {
        super(gear)
    }
    drive(): void {
        console.log(`Truck is driving with gear number ${this.gear}`);

    }
}

var car = new Car(3);
car.drive();
var truck = new Truck(5);
truck.drive();

