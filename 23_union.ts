// Passing Union Type in Constructor Parameter
class Student{
     name:string;
     age:string|number;

     constructor(name:string, age:string|number) {
         
         this.name = name;
         this.age = age;
     }

     showInfo() {
       console.log(`My name is ${this.name} and age is ${this.age}.`);
       
    }
}

var stu = new Student('Zin Ko Winn',19);
stu.showInfo();
var stu1 = new Student('Khin Suu Suu Nwe','21');
stu1.showInfo();
console.log();


//Passing Union Type in Function Parameter
function display(input:string|number|boolean) {
    if(typeof(input) == "number"){
        console.log('The input is type of number ');  
    } else if(typeof(input) == "string"){
        console.log('The input is type of string');  
    } else if(typeof(input) == "boolean"){
        console.log('The input is type of boolean ');  
    }else{
        console.log('UnKnown');
        
    }
}

display(2021);
display('Hello, TypeScript')
display(true);
console.log();

//Passing Union Type in Arrays
let student:string[]|number[];
student = ['Zin Ko Winn',"Khin Suu Suu Nwe"];
function showStringList(arr:string[]) {
    console.log('String array');
    
    for (const list in arr) {
        if (Object.prototype.hasOwnProperty.call(arr, list)) {
            const element = arr[list];
            console.log(element);
            
        }
    }
}
showStringList(student);
console.log();

student = [19,21]
function showNumberList(arr:number[]) {
    console.log('Number array');
    for (const list in arr) {
        if (Object.prototype.hasOwnProperty.call(arr, list)) {
            const element = arr[list];
            console.log(element);
            
        }
    }
}
showNumberList(student);
console.log();

enum CountryCode{
    Myanmar = 'MY',
    UnitedState = 'US',
    UnitedKingdom = 'UK'
}
const country:CountryCode =CountryCode.Myanmar;
console.log(country.toLowerCase());


//union like enum
export type Color = 'red' | 'white' | 'blue';  
const myColor: Color = 'red';  
console.log(myColor.toUpperCase());  
