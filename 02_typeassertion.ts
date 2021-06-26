let age:any = 19;
let myAge = <number> age;
console.log(typeof(myAge));

//Type Assertion with as keyword
let age1:any = 19;
let myAge1 = age1 as number;
console.log(typeof(myAge1));
console.log(myAge1);

//Type Assertion with object

interface Student{
    name:string;
    age:number;
}

let student= <Student>{};
student.name = 'Zin Ko Winn';
student.age = 19;
console.log(student.name);
console.log(student.age);
console.log(typeof(student));



