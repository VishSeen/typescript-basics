"use strict";
/**
 * Type_aliases are custom types that you can create to be used in ts.
 * for ex: you can create a type which access number and string
 */
// creating a function to hold the new type
let combineType = (input1, input2) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1 + " " + input2;
    }
    return result;
};
