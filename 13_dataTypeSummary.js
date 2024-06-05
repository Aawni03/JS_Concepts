//. Primitive - callByValue, gives the copy of the value to change

// String
// Number
// Boolean
// null
// undefined
// Symbol, is always unique. 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false
console.log(typeof id);
// BigInt


//. Non-Pritive___ callByRefrence, which directly allocates its refrence in the memory and make a change to it directly.
// Array
const arr = ['a', 'b, 'c]
// Objects
let myObj = {
    name:'Aawni',
    age:22
}
// Functions
const myFunct = function(){
    console.log("Hello World");
}

