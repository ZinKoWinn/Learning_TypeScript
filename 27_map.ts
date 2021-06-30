let students = new Map();
// It is used to add entries in the map.
students.set('name', 'Zin Ko Winn');
students.set('age', '19');
students.set('phone', '09123456789');

// t is used to retrieve entries from the map. It returns undefined if the key does not exist in the map.
console.log(`Find value by key : ${students.get('name')}`);
// It returns true if the key is present in the map. Otherwise, it returns false.
console.log(`Key is present : ${students.has('age')}`);
// It is used to returns the size of the map.
console.log(`Size of map : ${students.size}`);
// It is used to remove the entries by the key.
console.log(`Delete one by key : ${students.delete('phone')}`);
console.log(`Deleted value : ${students.get('phone')}`);
console.log();


// Iterating Map Data
console.log('Iterating Map Data');
console.log();

console.log('Iterating Map Data Of Keys');
for (const item of students.keys()) {
    console.log(`Keys : ${item}`);
}
console.log();

console.log('Iterating Map Data Of Values');
for (const item of students.values()) {
    console.log(`Values : ${item}`);
}
console.log();

console.log('Iterating Map Data Of Entires');
for (const item of students.entries()) {
    console.log(`Entires : ${item[0]} = ${item[1]}`);
}
console.log();


