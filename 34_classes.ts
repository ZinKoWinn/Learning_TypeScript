/*
* TypeScript Classes
In object-oriented programming languages like java, classes are the fundamental entities
which are use to create reusable components.

A class definition can contain the following properties:

1.Fields: It is a variable declared in a class.
2.Methods: It represents an action for the object.
3.Constructors: It is responsible for initializing the object in memory.
4.Nested class and interface: It means a class can contain another class.

eg, class className(Identifier){    
    field; 
    constructor;   
    method;    
}  

*/

// Creating an object of class
/*
A class creates an object by using the new keyword followed by the class name.
The new keyword allocates memory for object creation at runtime. All objects get memory in heap memory area. We can create an object as below.
*/

class Student {
    name: string;
    age: string;

    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`My name is ${this.name} and age is ${this.age}.`);

    }
}
console.log('Creating an object of class');

let stu = new Student('Zin Ko Winn', '19');
stu.greet();
console.log();

//Object Initialization
/*'
Object initialization means storing data to the object. There are
three ways to initialize an object. These are -
1. By reference variable
2. By constructor
A constructor is used to initialize an object. In TypeScript, the constructor method is always defined with the name "constructor." In the constructor, we can access the member of a class by using this keyword.
3. By method
A method is similar to a function used to expose the behavior of an object.
*/

//By reference variable and By constructor
console.log('By reference variable and By constructor');
class Employee {
    name?: string;

    constructor(name?: string) {
        this.name = name;
    }
    show(): void {
        console.log(`Name : ${this.name}`);
    }
}
//By reference variable
console.log('By reference variable');
const emp = new Employee();
emp.name = 'Zin Ko Winn';
// By method
emp.show();
console.log();
//By constructor
console.log('By constructor');
const emp1 = new Employee('Khin Suu Suu Nwe');
// By method
emp1.show();



