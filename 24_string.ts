let courseName = new String('TypeScript Fundamental');
console.log('Course Name : ' + courseName);
console.log(courseName.length);

//Single quoted strings
var studentName:string = 'Zin Ko Winn';
console.log('Student Name : ' + studentName);

//Double quoted strings
var teacherName:string = "Khin Suu Suu Nwe";
console.log('Teacher Name : ' + teacherName);



class ClassRoom {
    courseName:string;
    teacherName:string;
    studentName:string;
  
    constructor(courseName:string,teacherName:string,studentName:string) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.studentName = studentName;
    }

    showInfo() {
    //Back-ticks strings
    var info = `Course Name : ${this.courseName},\nTeacher Name : ${this.teacherName},\nStudent Name : ${this.studentName}`;
    console.log(info);
    }
}

var classroom = new ClassRoom(courseName as string,teacherName,studentName);
classroom.showInfo();

//String Literal Type
// type variableName = "value" |"value1";

//String Literal In Variable Assignment
type Color = "red"|"white"|"blue"
let ballon:Color;
if(ballon = 'red'){
    console.log('It is correct'); 
} 
// }else if(ballon = 'black'){
//     console.log("compile time error");  
// }

//String Literal In Function Parameter

function colors(colorName:Color):void {
    console.log(colorName.toUpperCase());  
}

colors('red')
// colors('black'); // compile time error

let country:string = ' Myanmar Country';
// It returns the character of the given index
console.log('charAt() method');
console.log(country.charAt(3));
console.log();

// It returns the combined result of two or more string.
console.log('concat() method');
console.log(country.concat(' is a golden land'));
console.log();

// It is used to check whether a string ends with another string.
console.log('endWith() method');
console.log(country.endsWith('r')); //true
console.log(country.endsWith('n')); // false
console.log();

// It checks whether the string contains another string or not.
console.log('includes() method');
console.log(country.includes('n')); //true
console.log(country.includes('q')); //false
console.log();

//It returns the index of the first occurrence of the specified substring from a string, otherwise returns -1.
console.log('indexOf() method');
console.log(country.indexOf('M'));
console.log(country.indexOf('w'));
console.log();

// It returns the index of the last occurrence of a value in the string.
console.log('lastIndexOf() method');
console.log(country.lastIndexOf('m'));
console.log();

// It is used to match a regular expression against the given string.
console.log('match() method');
console.log(country.match('[A-Za-z]'));
console.log();

//It replaces the matched substring with the new substring.
console.log('replace() method');
console.log('Before replace');
console.log(country);
console.log('After Replace');
console.log(country.replace('M','m'));
console.log();

//It searches for a match between a regular expression and string.
console.log('search() method');
console.log(country.search('m'));
console.log();

//It splits the string into substrings and returns an array.
console.log('split() method');
console.log(country.split('m',2));
console.log();


//It returns a string between the two given indexes.
console.log('substring() method');
console.log(country.substring(0,1));
console.log(country.substring(0,2));
console.log();

//It converts the all characters of a string into lower case.
console.log('toLowerCase() method');
console.log(country.toLowerCase());
console.log();

//It converts the all characters of a string into upper case.
console.log('toUpperCase() method');
console.log(country.toUpperCase());
console.log();

//It is used to trims the white space from the beginning and end of the string.
console.log('trim() method');
console.log(country.trim());
console.log();

//It is used to trims the white space from the left side of the string.
console.log('trimLeft() method');
console.log(country.trimLeft());
console.log();

//It is used to trims the white space from the right side of the string.
console.log('trimRight() method');
console.log(country.trimRight());
console.log();

//It returns a primitive value of the specified object.
console.log('valueOf() method');
console.log(country.valueOf());
console.log();


















