/*
* TypeScript Function

Advantage of function -
Code reusability : We can call a function several times without writing the same block of code again
Less Coding : Functions makes our program compact. So, we don't need to write many lines of code each time to perform a common task.
Easy to debug : It makes the programmer easy to locate and isolate faulty information.

* Function Aspects
1. Function declaration
 eg, function functionName([args]);
2. Function defination
function functionName([args]){
    code to be executed
}
3. Function call
functionName();

* Function Creation
We can create a function in two ways. These are:

1. Named function
2. Anonymous function
*/

//Named function

// function defination
console.log('Named function : greet()');

function greet(): void {
    console.log('Hello, Function');

}
//function call
greet();
console.log();

//Anonymous function
console.log('Named function : calculate');
var calculate = function (a: number, b: number): number {
    return a + b;
}
//Anonymous function call
console.log(calculate(10, 9));
console.log();


/*
* Function Parameter
There are three type of function parameter in TypeScript. These are
1.Optional Parameter
eg, function functionName(parameterName?:type); In this case, default value is undefined.

2.Default Parameter
eg, function functionName(parameterName:type = default value);
Note : We cannot make the parameter optional and default at the same time.

3.Reset Parameter
The rest parameter is used to pass zero or more values to a function. We can declare it by prefixing the three "dot" characters ('...') before the parameter.

Rules to follow in rest parameter:
1.Only one rest parameter is allowed in a function
2.It must be an array type
3.It must be the last parameter in a parameter list.
eg, function functionName(parameter1:type,...parameter2:type)
*/
console.log('Optional Parameter');

function showInfo(name: string, age: string, phone?: string, email?: string) {
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    if (phone != undefined) {
        console.log(`Phone : ${phone}`);
    }
    if (email != undefined) {
        console.log(`Email : ${email}`);
    }
}
showInfo('Zin Ko Winn', '19');
showInfo('Zin Ko Winn', '19', '09123456789');
showInfo('Zin Ko Winn', '19', '09123456789', 'zinko.developer@gmail.com');
console.log();

console.log('Default Parameter');

function greeting(person: string,greet: string = "Hello", ):string {
    return `${greet}, ${person}!`;
}
console.log(greeting('Zin Ko Winn'));
console.log(greeting('Zin Ko Winn','Hi'));
console.log();

console.log('Rest Parameter');
function show(a:any,...b:any[]){
    let result:any;
  for (let i = 0; i < b.length; i++) {
       result = a + b[i];
      console.log(result);
  }
}
show(5,9);
show(5,2,6,3,4);
show('Hello, ','Zin Ko Winn! ','Khin Suu Suu Nwe! ','Shan Lay!')




