/*
The number data type is used to represents both integers as well as floating-point values. 
TypeScript also supports Binary(Base 2), Octal(Base 8), Decimal(Base 10), and Hexadecimal(Base 16) literals.
*/
let num1:number = 25; //number
let num2:number = 0x37CF; //hexadecimal
let num3:number = 0o377; //octal
let num4:number = 0b111001; //binary

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log();


//Number Properties
console.log('Number Properties');
console.log();

console.log('Max_Value : ' + Number.MAX_VALUE);
console.log('Min_Value : ' + Number.MIN_VALUE);
console.log('Positive_Infinity_Value : ' + Number.POSITIVE_INFINITY);
console.log('Negative_Inifinity_Value : ' + Number.NEGATIVE_INFINITY);
console.log('Max_Safe_Integer_Value : ' + Number.MAX_SAFE_INTEGER);
console.log('Min__Safe_Integer_Value : ' + Number.MIN_SAFE_INTEGER);
console.log('Invalid Number : ' + Math.sqrt(-4));
console.log();

//Number's methods
let value1: number = 19;
let value2: number = 25.93;
let value3: number = 12667.976
console.log('Number of methods');
console.log();

// It is used to return the exponential notation in string format.
console.log('toExponential() method');
console.log(value1.toExponential());
console.log();

// It is used to return the fixed-point notation in string format.
console.log('toFixed() method');
console.log(value2.toFixed());
console.log();

// It is used to convert the number into a local specific representation of the number.
console.log('toLocaleString() method');
console.log(value3.toLocaleString());
console.log();

// It is used to return the string representation in exponential or fixed-point to the specified precision.
console.log('toPrecision() method');
console.log(value2.toPrecision());
console.log();

//It is used to return the string representation of the number in the specified base.
console.log('toString() method');
console.log(value1.toString());
console.log(value1.toString(2));//Binary
console.log(value1.toString(8)); //Octal
console.log();


// It is used to return the primitive value of the number.
console.log('valueOf() method');
console.log(value2.valueOf());
console.log();





















