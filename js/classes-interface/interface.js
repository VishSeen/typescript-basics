"use strict";
/**\
 *
 * Interfaces in TS works just like java.
 * You create an object just like you would with a java interface.
 * You can then use the object later and defines its properties
 */
// using the interface 
let dog = {
    name: 'German Shepherd',
    type: 'Mammal'
};
// changing value in the object
dog.name = "Pitbull";
// using the extended interface
let pooh = {
    honeyEater: true,
    name: 'Grisly',
    type: 'Mammal',
    attack: hit
};
// a function to use in an interface
function hit() {
    console.log('It hit !');
}
console.log(pooh);
pooh.attack(); // using the object function just like classes
