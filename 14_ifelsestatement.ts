/*
There are various types of Decision making in TypeScript.
They are -
1.if statement
2.if-else statement
3.if-else-if ladder
4.nested if statement
*/
var mark: number = 80;

//1. if statement
console.log('if statement');
if (mark > 40) {
    console.log('Pass');
}
console.log();

//2. if-else statement
console.log('if-else statement');

if (mark < 40) {
    // if condition is true, this blok will be executed.
    console.log('Fail');
} else {
    // if condition is false, this blok will be executed.
    console.log('Pass');
}
console.log();

//3. if-else-if ladder
console.log('if-else-if ladder');
if (mark < 40) {
    console.log("fail");
}
else if (mark >= 50 && mark < 60) {
    console.log("D grade");
}
else if (mark >= 60 && mark < 70) {
    console.log("C grade");
}
else if (mark >= 70 && mark < 80) {
    console.log("B grade");
}
else if (mark >= 80 && mark < 90) {
    console.log("A grade");
} else if (mark >= 90 && mark < 100) {
    console.log("A+ grade");
} else {
    console.log("Invalid!");
}
console.log();

// 4. nested if statement
console.log('nested if statement');
let n1 = 10, n2 = 22, n3 = 25
if (n1 >= n2) {
    if (n1 >= n3) {
        console.log("The largest number is: " + n1)
    }
    else {
        console.log("The largest number is: " + n3)
    }
}
else {
    if (n2 >= n3) {
        console.log("The largest number is: " + n2)
    }
    else {
        console.log("The largest number is: " + n3)
    }
}
console.log();




