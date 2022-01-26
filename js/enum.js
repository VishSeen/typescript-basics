"use strict";
/**
 * Enums limits you to a fixed number of variables/inputs
 */
// declaring an ENUM
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["READ_ONLY"] = 1] = "READ_ONLY";
    ROLES[ROLES["AUTHOR"] = 2] = "AUTHOR";
})(ROLES || (ROLES = {}));
// creating a person object to check if role matches ENUM
let personObject = {
    id: 1,
    name: 'Enum',
    role: ROLES.ADMIN
};
if (personObject.role === ROLES.ADMIN) {
    console.log('Enum working !');
    console.log(`ID is ${personObject.id}`);
}
