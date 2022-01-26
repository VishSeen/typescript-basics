"use strict";
/**
 * REST parameters are used when you don't know the number of parameter
 * that the function will use.
 * The (...) sign is used.
 * POINT TO REMEMBER: The rest parameter should come last else there will be an error
 */
// declaring simple function to hold a greeting message and an infinite number of names array
let greet = (greeting, ...names) => {
    console.log(`The names in array are : ${names}`);
    return greeting + " " + names;
};
console.log(greet("Taey", "Vish", "Shane", "Jade"));
console.log(" ");
// declaring a function that takes in a finite number of REST paramter
let greetWithTuples = (greeting, ...names) => {
    return greeting + " " + names;
};
console.log('Using REST with Tuples: ');
console.log(`Apart from 'Taey', there can only be two paramters : ${greetWithTuples("Taey", "Vish", "Shane")}`);
