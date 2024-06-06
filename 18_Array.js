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