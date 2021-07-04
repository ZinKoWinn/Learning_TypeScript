/*
* TypeScript Generics
When writing programs, one of the most important aspects is to build reusable components.
Generics offer a way to create reusable components. 
Generics provide a way to make components work with any data type and not restrict to one data type. 
So, components can be called or used with a variety of data types.

* Advantage of Generics

1. Type-safety: We can hold only a single type of objects in generics. It doesn't allow to store other objects.
2. Typecasting is not required: There is no need to typecast the object.
3. Compile-Time Checking: It is checked at compile time so the problem will not occur at runtime.

*/

// Generic

function print<T>(arg: T) {
    console.log(arg);
}

print(1000);
print('Zin Ko Winn');
print(true);
console.log();

// Why need Generics

console.log('Without Generics');

function getItems(items: any[]): any[] {
    return new Array().concat(items);
}

let numArr = getItems([1, 2, 3, 4, 5]);
let strArr = getItems(['Java', 'Spring', 'TypeScript', 'Angular', 'Dart', 'Flutter'])

numArr.push('Can i add string in number array');
strArr.push(6);

console.log(numArr);
console.log(strArr);
console.log();

console.log('With Generics');
function getItemsWithGenerics<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let numArrgetItemsWithGenerics = getItemsWithGenerics<number>([1, 2, 3, 4, 5]);
let strArrgetItemsWithGenerics = getItemsWithGenerics<string>(['Java', 'Spring', 'TypeScript', 'Angular', 'Dart', 'Flutter'])

numArrgetItemsWithGenerics.push(6);
// Compilation Error 
// numArrgetItemsWithGenerics.push('Can i add string in number array');
strArrgetItemsWithGenerics.push('Bootstrap');
// Compilation Error 
// strArrgetItemsWithGenerics.push(6);

console.log(numArrgetItemsWithGenerics);
console.log(strArrgetItemsWithGenerics);
console.log();

// MultiType Variable
console.log('MultiType Variable');
function showInfo<T, A>(name: T, age: A): void {
    console.log(`Name : ${name}\nAge : ${age}`);

}
showInfo('Zin Ko Win', 19);
console.log();

// Generic with non-generic Type
console.log('Generic with non-generic Type');
function produtsInfo<T>(productCode: T, name: string, price: number): void {
    console.log(`Product Code : ${productCode}\nName : ${name}\nPrice : ${price}`);

}

produtsInfo('0012', 'Dell Insprion 15 5000', 1156500);
console.log();

// Generics with Classes
console.log('Generics with Classes');

class Student<T, U> {
    private name?: T;
    private age?: U;

    constructor(name?: T, age?: U) {
        this.name = name;
        this.age = age;
    }

    setName(name: T) {
        this.name = name;
    }

    setAge(age: U) {
        this.age = age;
    }

    show(): void {
        console.log(`Name : ${this.name}\nAge : ${this.age}`);

    }
}

let stu = new Student<string, number>();
stu.setName('Zin Ko Win');
stu.setAge(19);
stu.show();
console.log();

//Generic with Interface

console.log('Generic with Interface');

interface Company {
    companyName: string;
    developer: string;
}

interface Application extends Company {
    name: string;
    fileSize: number;
}

function appInfo<T extends Application>(app: T): void {
    console.log(`Company Name : ${app.companyName}\nDeveloper Name : ${app.developer}\nApplication Name : ${app.name}\nFile Size : ${app.fileSize}`);

}

let grade_10_myanmarsar: Application = {
    companyName: 'Soft',
    developer: 'Zin Ko Winn',
    name: 'Grade-10 Myanmarsar',
    fileSize: 24.56
}
appInfo(grade_10_myanmarsar);
console.log();

// Generic Constraints
/*
The generic type allows any data type. However, 
we can restrict it to certain types using constraints.

In the following example, the display function is a generic function with constraints. 
A constraint is specified after the generic type in the angle brackets. 
The constraint <T extends Person> specifies that the generic type T must extend the class Person. 
So, the Person class or any other class that extends the Person class can be set as generic type while 
calling the display function, otherwise the compiler will give an error.
*/

console.log('Generic Constraints');

class Employee {
    name:string;
    age:number;
    department:string;
    constructor(name:string,age:number,department:string) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
}

function  greet<T extends Employee>(emp:T):void{
    console.log(`My name is ${emp.name} and age is ${emp.age}. I am from ${emp.department}.`);   
   }

   let emp = new Employee('Zin Ko Win',19,'IT Department');
   greet(emp);