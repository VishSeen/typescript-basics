/**
 * Typescript object are basically Javascript object
 * They should first define the type that the object will hold.
 * They can then be initiated to hold the values 
 */


// JAVASCRIPT object
let person = {
  name: 'Vishroy',
  age: 24,
  alive: true,
  functions: ['work', 'eat']
};


// TYPESCRIPT object 
let animals: {
  name: string;
  age: number;
  alive: boolean;
  functions: string[];
} = {
  name: 'dog',
  age: 5,
  alive: true,
  functions: ['sleep', 'eat']
}
