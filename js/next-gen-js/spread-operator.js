"use strict";
/**
 * SPREAD Operator is used to add values in an object or array using an existing variable.
 * Instead of looping one by one on the Object/Array, you just use the (...) following
 * with the Object/Array you want to get the value from.
 */
// using the SPREAD operator on an Array
let hobbies = ["Hiking", "Gaming"];
let activeHobbies = ["Coding"];
let dropHobbies = ["Cooking", ...activeHobbies];
console.log(" ");
console.log(`Created a DroppedHobbies and spread activeHobbies as soon as created the array : ${dropHobbies}`);
console.log(" ");
console.log(`ActiveHobbies before pulling hobbies : ${activeHobbies}`);
activeHobbies.push(...hobbies); // using SPREAD to spread array elements in @activeHobbies
console.log(`ActiveHobbies after pulling hobbies : ${activeHobbies}`);
console.log(" ");
// using SPREAD Operator on objects
let aPerson = {
    id: 1,
    name: 'Seenarain'
};
// copying inside object values using SPREAD
let copiedPerson = Object.assign({}, aPerson);
console.log(`Person object is : ${aPerson.name}`);
console.log(`CopiedPerson object is : ${copiedPerson.name}`);
