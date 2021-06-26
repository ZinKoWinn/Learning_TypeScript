class Student {
     name:string; // Global variable or instance variable or object variable
     age:number;  
    static education:string; // Global variable or static variable or class variable
    constructor(name:string,age:number,education:string) {
        this.name = name;
        this.age = age;
        Student.education = education;
    }

     greet():void {
         console.log(`My name is ${this.name} and my age is  ${this.age} and education is ${Student.education}`);
        }

}

var stu = new Student('Zin Ko Winn',19,'Student');
stu.greet();

var stu1 = new Student('Khin Suu Suu Nwe',21,'Civil Engeinner');
stu1.greet();
stu.greet();


