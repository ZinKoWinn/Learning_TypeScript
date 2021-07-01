/*
* TypeScript Function Overloading
Function overloading is a ability to create multiple methods with the same nam
but different parameter types and return type. However, it can have the same number 
of parameters. Function overloading is also known as method overloading.
*/
let items:any[] = [];
function add(name:string):string;
function add(money:number):number;
function add(active:boolean): boolean;
function add(item:any):any {
     return item;
}

items.push(add('Zin Ko Winn'));
items.push(add(100000));
items.push(add(true));
for (const item of items) {
    console.log(item);
    
}


 