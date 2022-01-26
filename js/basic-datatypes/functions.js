"use strict";
/**
 * Functions are ways to bundle small tasks together.
 * They need to be called to execute
 */
// A Simple Function
function addNum(num1, num2) {
    return num1 + num2;
}
// New Arrow Function
const subtract = (num, num1) => {
    return num - num1;
};
/**
 * Mentionning what the return type of functions should be.
 * Both examples for modern and old JS
 */
// Precising that a number will be return from function
const precisingReturnTypeFunc = (passNum) => {
    return passNum + 1;
};
// Returning VOID
function simpleVoidFunc() {
    console.log('Returns VOID');
}
const ArrowVoidFunc = () => {
    console.log('This function returns VOID');
};
/**
 * FUNCTION AS VARIABLES
 */
// Simple variable as Function
let functAsType;
functAsType = subtract;
// Precise what the Function will return or the inputs needed
let funcAsType2; // after arrow, we specify the return type
funcAsType2 = precisingReturnTypeFunc;
/**
 * DEFAULT FUNCTIONS
 * You can add a default parameter to be used in a function which will be used
 * if the user enters only one value.
 * The default parameter can only be applied to the second paramater and not the first.
 * So the first should always be the one value that the user MUST INPUT
 */
// Simple default function
const addString = (name, surname = "No surname..") => {
    return surname + " " + name;
};
console.log('Before using 2 parameters: ');
console.log(addString("Vishroy"));
console.log(" ");
console.log("After using 2 params: ");
console.log(addString("Seenarain", "Vishroy"));
