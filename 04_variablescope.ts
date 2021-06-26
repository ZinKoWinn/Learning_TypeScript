var school:string = 'BEHS TaNyaung';          //global variable 
class Student { 
   studnetName = 'Zin Ko Winn';             //class variable or instance variable or object variable
   static age = 19;         //static variable 
   
    sayGreet():void { 
      let greet = 'Hello, My name is ';    //local variable 
      console.log(greet + this.studnetName)
   } 

} 

function count() {
   var x:number = 10;
   if(true){
      var y:number = 9;
      console.log(x);
      console.log(y);
      console.log(x + y);
      
   }
   console.log(x);
   console.log(y);
   console.log(x + y);
}

function calculate(input:boolean) {
   let x = 10;
   if(input){
      let y = x + 11;
      return y;
   }
   // return y; //let variable cannot find in other code block
}

console.log("School : "+school)  
var obj = new Student(); 
obj.sayGreet()
count();
// console.log(x); //erroe
// console.log(y); //error
console.log(calculate(true));



