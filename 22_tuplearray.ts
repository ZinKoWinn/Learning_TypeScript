//A Tuple is an array which store multiple fields belong to different data types.

let tuplearr = [25,1,2002,'Zin Ko Winn'];
function tuple1() {
    tuplearr.forEach(info => {
        console.log(info);
        
    });
}

tuple1();
console.log("Length of Tuple array before push: "+tuplearr.length);   // returns the tuple size  

tuplearr.push('Junior Java Developer');
tuple1();
console.log("Length of Tuple array after push: "+tuplearr.length);   // returns the tuple size  

tuplearr.pop();
tuple1();
console.log("Length of Tuple array after pop: "+tuplearr.length);   // returns the tuple size  
console.log();

// Destructuring the Tuple
console.log('Destructuring the Tuple');
let student = ['Zin Ko Winn',19,'09123456789'];
function tuple2():void {
  let [name,age,phone] = [...student];
  console.log(name);
  console.log(age);
  console.log(phone);
}
tuple2();
console.log();


//Passing Tuple to Functions
console.log('Passing Tuple to Functions');

function tuple3(arr:any[]) {
    for (const stu of arr) {
        console.log(stu);  
    }
}

tuple3(student);