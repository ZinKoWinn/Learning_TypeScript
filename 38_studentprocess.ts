// Importing a Single export from a Module
import { Student } from "./38_student";

// Importing the Entire Module into a Variable
import * as Stu from './38_student'

// Renaming an Export from a Module
import {Student as BioStudent} from './38_student'

console.log('Importing a Single export from a Module');

let stu = new Student('Zin Ko Winn','19','Grade 10');
stu.showInfo();
console.log();


console.log('Importing the Entire Module into a Variable');

console.log(`School Name : ${Stu.schoolName}`);

let stu1 = new Stu.Student('Sai Zin Ko','17','Grade 9');
stu1.showInfo();
console.log();

console.log('Renaming an Export from a Module');

let stu2 = new BioStudent('Khin Suu Suu Nwe','16','Grade 10');
stu2.showInfo();
