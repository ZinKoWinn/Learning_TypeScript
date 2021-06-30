let students = new Set();
// It is used to add entries in the set.
students.add('Zin Ko Winn')
    .add('Khin Suu Suu Nwe')
    .add('Zin Ko Winn')
    .add('Shan Lay')
    .add('Shan Ma Lay');

console.log(students);

// It returns true if the key is present in the set. Otherwise, it returns false.
console.log(`Key is present : ${students.has('Zin Ko Winn')}`);
// It is used to returns the size of the set.
console.log(`Size of map : ${students.size}`);
// It is used to remove the entries from the set.
console.log(`Delete one by key : ${students.delete('Shan Ma Lay')}`);
console.log();


// Iterating Set Data
console.log('Iterating Set Data');
console.log();

for (const item of students) {
    console.log(`Set Values : ${item}`);
}
console.log();
