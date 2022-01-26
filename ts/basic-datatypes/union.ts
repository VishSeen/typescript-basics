/**
 * UNION types are define with |
 * these are types that you defined can be accepted ex: in a Function
 */


// declaring a function to accept number and string using UNION |
let combine = (input1: number | string, input2: number | string) => {
  let result;

  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }

  return result;
}



console.log(`Passing in numbers (5, 10) : ${combine(5, 10)}`);

console.log(`Passing in string (Hello, Vishroy) : ${combine('Hello', 'Vishroy')}`);