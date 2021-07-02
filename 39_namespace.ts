/*
* TypeScript - Namespaces
The namespace is used for logical grouping of functionalities. 
A namespace can include interfaces, classes, functions and 
variables to support a single or a group of related functionalities.

A namespace can be created using the namespace keyword followed by the namespace name. 
All the interfaces, classes etc. can be defined in the curly brackets { }.
eg, namespace Name
{
    
}

In order to use namespace components at other places, 
first we need to include the namespace using the triple slash reference syntax 
/// <reference path="path to namespace file" />. 
After including the namespace file using the reference tag, 
we can access all the functionalities using the namespace.

example can see 39_stringutil.ts and 39_student.ts.

* Compile with :
tsc --target es6 39_student.ts --outfile 39_student.js

* Run with :
node 39_student.js
*/

