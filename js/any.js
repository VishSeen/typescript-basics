"use strict";
/**
 * Any is a type assign to a variable to show that it
 * can store ANY kind of type
 */
// using a basic ANY for variable
let aMixedVar;
aMixedVar = 3;
console.log(`ANY variable is a : ${typeof aMixedVar}`);
console.log(' ');
console.log('Changing ANY variable now..');
console.log(' ');
// changing the variable of aMixedVar
aMixedVar = 'Hello there!';
console.log(`ANY variable is a : ${typeof aMixedVar}`);
// using ANY on arrays
let aMixedArray;
aMixedArray = ['A string', 1, true];
console.log(`ANY Array contains : ${aMixedArray}`);
