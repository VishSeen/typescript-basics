/**
 * DESTRUCTURING is the process of removing values from Objects or Arrays and holding them in variables
 * so that we don't need to import all of the values from gthe Object or Arrays
 */ 


// DESTRUCTURING of an Object
let anime = {
  id: 1,
  title: 'Konosuba',
  genre: "Romance"
}

const { title, genre } = anime; // creating the variable title and genre to hold the title and genre of the ANIME Object

console.log('Destructured Anime object : ');
console.log(`Title is : ${title}`);
console.log(`Genre is : ${genre}`);
console.log(" ");




// DESTRUCTURING an array
let someNumbers = [1, 2, 3];
let [one, two, three] = someNumbers;

console.log('Destructured array : ');
console.log(`One : ${one}`);
console.log(`Two : ${two}`);
console.log(`Three : ${three}`);
