//Switch statement with number
let num1: number = 19;
let num2: number = 21;
let num3: number = num1 + num2;
switch (num3) {
    case 10:
        console.log(`Num3 is 10`);
        break;
    case 20:
        console.log(`Num3 is 20`);
        break;
    case 30:
        console.log(`Num3 is 30`);
        break;
    case 40:
        console.log(`Num3 is 40`);
        break;
    default:
        console.log('Invalid');
        break;

}
console.log();

// Switch statement with string
var grade: string = 'A';
console.log('Switch statement with string');

switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Fair');
        break;
    case 'D':
        console.log('Poor');
        break;

    default:
        console.log('Invalid Grade');
        break;
}
console.log();

// Switch statement with enum
enum Colors { RED, BLUE, WHITE, GREEN };
let color: Colors = Colors.RED
console.log('Switch statement with enum');
function getColor(color:Colors): void {
    switch (color) {
        case Colors.RED:
            console.log('It is red Color');
            break;

        case Colors.BLUE:
            console.log('It is blue Color');
            break;

        case Colors.WHITE:
            console.log('It is white Color');
            break;
        case Colors.GREEN:
            console.log('It is green Color');
            break;

        default:
            break;
    }
}

getColor(color);
console.log();


// If a break statement is not present, switch statement is fall-through.
let number = 20; 
console.log('Fall Through Example');
   
switch(number)  
{    
    //switch cases without break statements    
    case 10: console.log("10");    
    case 20: console.log("20");    
    case 30: console.log("30");    
    default: console.log("Not in 10, 20 or 30");  
}  