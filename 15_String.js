// single or Double Quotes
const name = 'Aawni'
const repoCount = 22
console.log(name + repoCount);  //! Depricated
console.log(`${name} has a repocount of ${repoCount}`);

const sport = 'Badminton'
console.log(sport[0]);
console.log(sport.__proto__);   //{}, 
//! __proto__,  Depricated



console.log(sport.length);
console.log(sport.toUpperCase());
console.log(sport.charAt(2));   //. gets the value of a specified Index
console.log(sport.indexOf('t'));    //. gets the position/Index 

const newStr = sport.substring(0,4)
// console.log(newStr);    //. last index in not considered

//- slice

//- trim, removes trailing white spaces and newLine.
const trimStr = '      Aawni     ';
console.log(trimStr.trim());

//- replace
const url = 'https://aawni.com/aawni k' // Browser does url encoding and converts the space to %20
console.log(url.replace(' ', '-'));     // here node dint do any encoding soo tried replaced the ' '.

//- includes
console.log(url.includes('aawni'));   // returns the boolean value.

//- split
console.log(sport.split('-'));  // returns an array


//- to get know more on the string properties can go to console and check there for the property and its working.
