//Using square brackets
function array1(): void {
    let author: string[] = ['Aung Aung', 'Maung Maung', 'Thaw Thaw', 'Maw Maw'];
    console.log(`Author [0] : ${author[0]}`);
    console.log(`Author [1] : ${author[1]}`);
    console.log(`Author [2] : ${author[2]}`);
    console.log(`Author [3] : ${author[3]}`);
}

array1();

//Using a generic array type
function array2(): void {
    let books: Array<string> = ['Leaning Java', 'Effective Java', 'Spring in Action', 'Spring Receipes', 'Microservices in Spring'];

    console.log('**** For Loop ****\n');

    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        console.log(element);
    }

    console.log('**** For Loop End****\n');
    console.log();


    console.log('**** For In Loop ****\n');
    for (const book in books) {
        if (Object.prototype.hasOwnProperty.call(books, book)) {
            const element = books[book];
            console.log(element);
        }
    }
    console.log('**** For In Loop End****\n');
    console.log();

    console.log('**** For Of Loop ****\n');
    for (const book of books) {
        console.log(book);
    }
    console.log('**** For Of Loop End****\n');
    console.log();

}

array2();

// Using array object
console.log('**** For Each Loop ****\n');
function array3(): void {
    let persons: string[] = new Array('Zin Ko Win', 'Khin Suu Suu Nwe');
    persons.forEach(person => console.log(person));
    console.log('**** For Each Loop End****\n');
    console.log();
}
array3();

//Passing arrays in function 
console.log('**** Passing Arrays An Function ****\n');
let course: string[] = new Array('Java SE', 'Java EE', 'Spring Framework', 'Flutter')
function array4(arr: string[]) {
    for (const c in course) {
        if (Object.prototype.hasOwnProperty.call(course, c)) {
            const element = course[c];
            console.log(element);
        }
    }
    console.log('**** Passing Arrays An Function End ****\n');
    console.log();

}
array4(course);


//Using Spread operator
console.log('**** Spread operator ****\n');
let courses: string[] = new Array('Java SE', 'Java EE', 'Spring Framework', 'Flutter')
function array5(): void {
    let jdccourse = [...courses, 'Angular', 'Java Script']
    for (const c in jdccourse) {
        if (Object.prototype.hasOwnProperty.call(jdccourse, c)) {
            const element = jdccourse[c];
            console.log(element);
        }
    }
    console.log('**** Spread operator End ****\n');
    console.log();

}
array5();


//Multi-Dimensional Array 
console.log('**** For Await Of Loop ****\n');
function array6() {
    let employees: string[][] = [['Aung Aung', 'Maung Maung', 'Thaw Thaw'], ['aungaung@gmail.com', 'maungmaung@gmail.com', 'thawthaw@gmail.com']];
    for (const employee of employees) {
        employee.forEach(em => console.log(em))
    }
    console.log('**** For Await Of Loop ****\n');
    console.log();
}
array6();

