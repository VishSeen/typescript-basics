/**
 * Tuples are special Arrays in ts and used as 
 * Arrays but stores only fixed number of types mentionned
 */


// simple declaration of a tuples
let tuples: [number, string];
tuples = [0, 'Jade'];

tuples[0] = 1
tuples[1] = 'a String';


// below will produce an error as the tuples
// can only contain 2 elements

// tuples[3] = true; 


// tuples in an object example
let anObject: {
  id: number;
  user: [number, string];
} = {
  id: 2,
  user: [11, 'vishroy']
}