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





