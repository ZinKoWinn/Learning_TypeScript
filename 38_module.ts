/*
* TypeScript Modules

*  Without Module
The TypeScript code we write is in the global scope by default.
If we have multiple files in a project, the variables, functions, etc. 
written in one file are accessible in all the other files.

** teacher.ts
var greetingToStudent : string = 'Good morning, all studetns';

** students.ts
greetingToStudent = 'Blah Blah';
condole.log(greetingToStudent); //  not only can access but also can modify from other file because of global scope.
So it can lead to conflicts/errors in our code.

* With Module
Modules are a way to create a local scope in the file. 
So, all variables, classes, functions, etc. that are 
declared in a module are not accessible outside the module. 
A module can be created using the keyword export and a module 
can be used in another module using the keyword import.

** teacher.ts
export var greetingToStudent : string = 'Good morning, all studetns';

** students.ts
greetingToStudent = 'Blah Blah'; // Error : cannot find greetingToStudent becuase of module
condole.log(greetingToStudent); // Error : cannot find greetingToStudent becuase of module
*/

// Export and Import can see 38_student.ts and 38_studentprocess