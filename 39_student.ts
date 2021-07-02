/// <reference path="39_stringutil.ts" />

class Student {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    showName(): void {
        console.log(`Upper Name : ${StirngUtil.toUpper(this.name)}`);
        console.log(`Lower Name : ${StirngUtil.toLower(this.name)}`);
        console.log(`SubString Name : ${StirngUtil.subString(this.name, 0, 3)}`);

    }
}

let stu = new Student('Zin Ko Winn');
stu.showName();

// Compile with tsc --target es6 39_student.ts --outfile 39_student.js
// Run with node 39_student.js