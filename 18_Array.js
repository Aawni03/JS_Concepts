// Array is an Object, which is a collection of elements in a variable
// resizeable, mixable of diff dataTypes
// cannot be accessed by using values. We access the elements by indexing.

// ShallowCopy___which have same refrence point => it changes the value in original variable.
// DeepCopy___donot share the same Refrence.


const arr = [0, 1, 2, 3, 4, 5, "aawni"];
const arr2 = new Array(1,2,3,4)

// Arrays also have the prototype access.

console.log(arr[2]);

//- Array Methods
arr.push(123)   //. adds the elem to the last,
arr.pop()   //. removes the lastElement from an Array
arr.unshift(789)  //. adds new elemnt to the start of an Array, which shifts all the values of the elements. So generally not used. ex__Todo  
arr.shift() //. removes the first element from an Array.
console.log(arr.includes(2));   // gets boolean value, true or false
console.log(arr. indexOf(3));   // gets the position of the element. If the serach element is not present in the array then returns -1.

//- join
console.log(arr.join('+'));    // adds all the elements of an array to a string by the defined separator.
console.log(typeof(arr.join()));  // string

//- slice
console.log('A ', arr);

const sliceArr = arr.slice(1,3) 
// creates a new array, 
// starts from the initial index and dont includes the last index.
console.log(sliceArr);
console.log('B ', arr);

//- splice
console.log('A ', arr); // [ 0, 1, 2, 3, 4, 5, 'aawni' ]

const spliceArr = arr.splice(1,3)
// returns new array,
// removes the splice part from the initial array
//= MANIPULATES the Original Array.

console.log(spliceArr); // [ 1, 2, 3 ], got removes from the original array.

console.log('B ', arr); // [ 0, 4, 5, 'aawni' ]


console.log(arr);


//- Array Functions

const arrFunc1 = ['1', '2', '3']
const arrFunct2 = ['a','s','d','f']
// arrFunc1.push(arrFunct2)    //. push, appends all the elements to the last of an array.
// console.log(arrFunc1);  // [ '1', '2', '3', [ 'a', 's', 'd', 'f' ] ]


// const concatArr = arrFunc1.concat(arrFunct2)  //. combines 2 or more arrays.
// console.log(concatArr);  // [ '1', '2', '3','a', 's', 'd', 'f' ]

//- Spread Operator
const spreadArr = [...arrFunc1, ...arrFunct2]
console.log(spreadArr); //. this spreads all the elements of the 2or more arrays in a single array

//- Flat, concats 2 or more arrays in a single array with a specified depth.
// doesn't work for strings.
const flatArr = [1,2,3,[4,5,6],7,8,[9,45,[4,123,5,15247]]]
console.log(flatArr.flat(Infinity));



//- Array Conversion
console.log(Array.isArray('Aawni')); //false


console.log(Array.from('Aawni'));   //. converts the string to Array

console.log(Array.from({name:'Aawni'}));    
//. [], this gets confused. we need to inform if the method is being applied on the key or the value.
//= interview Focus

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
// Returns a new Array from the set of elements.








