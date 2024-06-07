//- if
if (true == true) {
  //executes
}

//- if-else
if (true) {
  //executes
} else {
  // Does not executes
}

//- switch
const day = "tuesday";
switch (day) {
  case "monday":
    console.log("monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;
  default:
    console.log("sunday");
    break;
}

//- truthy
//. "0", 'false', " ", {}, function(){}

//- falsy
//. false,0,-0, BigInt 0n, "", null, undefined, NaN

//- to check if the array is having any values
let userEmail = []
if(userEmail.length === 0){
    console.log('Array is Empty');
}



//- to check if the Obj is empty
let emptyObj = {}
// Object.keys(emptyObj)  //. returns an Array, 
//. Once converted to array we can check by using length Property

if(Object.keys(emptyObj).length === 0){
    console.log('Obj is empty..');
}

//-  In Browser console -------------------------------------
false == 0 // true
false == '' // true
0 == '' // true



//- Nullish Coaleasing Opearator (??), works around null & undefined
let val1;
// val1 = 5 ?? 10  //. generally returns the 1st value
// val1 = null ?? 10   //. safety check, if db api gets the null value such that the business response logic is handled in a more minute manner.
val1 = undefined ?? 15

console.log(val1);



//- ternary Operator 
//. condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');;


//- optional chaining
const car = {}

console.log(car.manufacturer?.address); // undefined
console.log(car.manufacturer?.drive()); // undefined


const carOwner = null;

console.log(carOwner?.manufacturer?.address); // undefined
console.log(carOwner.manufacturer?.address); // TypeError: Cannot read properties of null