let list = [5,8,null,20];
console.log(list);


let arr = [5,8,20,'Inference Type']
console.log(arr);

function sum(x: number, y: number )  
{  
    return x + y;      
}  
let num: number = sum(10,20); // Correct  
let str: string = sum(10,20); // Compiler Error   