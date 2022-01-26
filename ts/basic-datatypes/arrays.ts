// assigning single values
let birds = ['Kestrel', 'Pigeon', 'Falcon'];

// assigning different vlaues
let mixed = [1, 'A string', true]; // can contains 3 types of values


// declaring and assigning
let dogs: string[];
dogs = ['Shepherd', 'Pitbull'];


// declaring a multi array and assigning also called a TUPLES
let mixes = [];
mixes = [2, 'Another string'];

mixes.push('a');


// declaring an array as a number and initialising it to an empty array
// so that we can use push method on this
let basicArray: number[] = [];
basicArray.push(1);
basicArray.push(2);



// using UNION type on arrays and initialising it
let unionArray: (number | string)[] = [];
