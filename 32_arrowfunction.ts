/*
* TypeScript Arrow function
TypeScript provides an arrow function which is the shorthand syntax for defining the anonymous function,
 i.e., for function expressions. It omits the function keyword. We can call it fat arrow (because -> is a thin arrow and => is a "fat" arrow). 
 It is also called a Lambda function.
 
We can split the syntax of an Arrow function into three parts:
1.Parameters: A function may or may not have parameters.
2.The arrow notation/lambda notation (=>)
3.Statements: It represents the function's instruction set.

eg, (parameter1, parameter2, ..., parameterN) => expression;  
*/

//Without arrow function
console.log('Without arrow function');
let sum1 = function (a: number, b: number): number {
    return a + b;
}
console.log(`Total : ${sum1(10, 9)}`);
console.log();



//With arrow function
console.log('With arrow function');
let sum2 = (a: number, b: number) => a + b;
console.log(`Total : ${sum2(10, 11)}`);
console.log();

//Arrow function with parameter
console.log('Arrow function with parameter');
let greeting = (greet: string, person: string) => {
    console.log(`${greet}, ${person}!`);
}
greeting('Hello','Zin Ko Winn');
console.log();

//Arrow function without parameter
console.log('Arrow function without parameter');
let sum =(a:number,b:number)=> console.log(a + b);
sum(20,454)
console.log();

//Arrow function in a class
console.log('Arrow function in a class');
class Student {
    private name:string;
    private age:string;
    constructor(name:string,age:string) {
       this.name = name;
       this.age = age; 
    }

    greet = ()=>console.log(`My name is ${this.name} and age is ${this.age}.`);
    
}
var stu = new Student('Zin Ko Winn','19');
stu.greet();