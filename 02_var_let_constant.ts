//var 
function varVariable(input:true) {
    var greet = 'Hi';
    if(input){
      var greet = 'Hello, TypeScript';
    }
    console.log(greet);
}

//let
function letVariable(input:true) {
    let greet = 'Hi';
    if(input){
      let hello = 'Hello, TypeScript';
    }
    // console.log(hello);
}

function constVariable() {
    const age:number = 19;
    console.log(age);
    // const age = 21; //Cannot redeclare block-scoped variable 'age'.
    // console.log(age);
}

varVariable(true);
letVariable(true);
constVariable();