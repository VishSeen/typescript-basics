/**
 * Enums limits you to a fixed number of variables/inputs
 */

// declaring an ENUM
enum ROLES { ADMIN, READ_ONLY, AUTHOR }


// creating a person object to check if role matches ENUM
let personObject = {
  id: 1,
  name: 'Enum',
  role: ROLES.ADMIN
}

if (personObject.role === ROLES.ADMIN) {
  console.log('Enum working !');
  console.log(`ID is ${personObject.id}`);
  
}