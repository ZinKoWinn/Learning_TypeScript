// var variableName : TypeAnnotation = value;

var name:string = 'Zin Ko Win';
var age:number = 19;

console.log(name);
console.log(age);

function showInfo(name:string,age:number,address:string) {
    console.log('Name : ' + name + ', Age : ' + age + ', Address : ' + address);   
}

showInfo('Khin Suu Suu Nwe',21,'TaungGyi');

//Inline Type Annotation

var student:{
    name:string;
    age:number;
    phone:string
}
student = {
    name:'Sai Zin Ko',
    age:15,
    phone:'09123456789'
}

console.log(student);
console.log('Name : ' + student.name + ', Age : ' + student.age + ', Phone : ' + student.phone);   

