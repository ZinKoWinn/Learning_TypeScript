export let schoolName: string = 'BEHS Tanyaung';

let headmaster: string = 'U Thar Aye';
export class Student {
    name: string;
    age: string;
    grade: string;

    /**
     *
     */
    constructor(name: string, age: string, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    showInfo(): void {
        console.log(`Name : ${this.name}\nAge : ${this.age}\nGrade : ${this.grade}`);
    }
}