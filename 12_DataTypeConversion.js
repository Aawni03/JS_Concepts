let score = "33";
let numWithStr = "123asd"
let convertNull = null
let convertUndefined = undefined
let convertBoolean = true
let num = 123


// NUMBER ========================================================

// if the value Type is unknown, we can check by its type with the help of <typeof>
console.log(typeof score);
console.log(typeof(score));

// CONVERT TO NUMBER
let convertToNumber = Number(score)
console.log(typeof convertToNumber);
console.log(convertToNumber);


let NumWithStrToNumber = Number(typeof numWithStr)
console.log(typeof NumWithStrToNumber);
console.log(NumWithStrToNumber); // NaN, always check the value and its dataType

let nullToNumber = Number(convertNull)
console.log(typeof nullToNumber);
console.log(nullToNumber);  // 0

let undefinedToNumber = Number(convertUndefined)
console.log(typeof undefinedToNumber);
console.log(undefinedToNumber); // NaN


let BooleanToNumber = Number(convertBoolean)
console.log(typeof BooleanToNumber);
console.log(BooleanToNumber);   // true, so value = 1. if false, vaue=0.


//. "33" => 33
//. "23asd" => NaN
//. true => 1, false => 0;
//. "" => false
//. "aawni" => true
console.log("------------------------------");

// STRING ========================================================

let numToString = String(num)
console.log(typeof numToString);
console.log(numToString);

// OPERATIONS ===================================================

let value = 3;
let negValue = -value
console.log(negValue);

// ArthematicOperations__+, -, *, /, %, ++, --, **

console.log("1"+2+2);   // 122,
console.log(2+2+"1");   // 41

// PREFIX - POSTFIX
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);  // "a:4, b:4", returns the value after incrementing.


let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // "x:4, y:3", returns the value before incrementing


// ComparisionOperators___>, <, >=, <=, ==, !=, !==, ===,
//. Here we should compare with the same dataType values.

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
// This is not always predictable as the value of null changes in every now and then.

console.log(undefined > 0); //false
console.log(undefined == 0);    //false
console.log(undefined < 0);    //false
// This is not always predictable as the value of null changes in every now and then.

// STRICT CHECK
console.log("2" == 2);  // true, checks only the value
console.log("2" === 2); // false, checks the value and their dataType.

