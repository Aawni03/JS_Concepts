// BLOCK SCOPE
// CONSTANT ===================================================
const accountId = 101;
    // accountId = 2   //. Assignment to the constant variable. Not Allowed.
    // console.log(accountId);
    //. Needs to be initialized while declaration
    //. cannot be redeclared or reassigned.
// LET ========================================================
let accEmail = 'bhawani@gmail.com'
accEmail= 'aawni@gmail.com'
let accountState;   //. will result in undefined.
    //. can be redeclared and reassigned


// GLOBAL SCOPE
// VAR ========================================================
// depricated, don't use
var accPwd = '1234'
accPwd = 'ASD'

accCity = 'Banglore'
accCity = 'Bhubaneshwar' //. variables can also be declared without using any variables keyword. Possible but don't use.

console.log([accountId, accEmail, accPwd, accCity, accountState]);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// DATA TYPES

"use strict";    //. treats the JS code as per newer version

//. String, placed in "" or ''
let str = "Bk"

//. Number, takes a range of no. till (2)53
let age = 23

//. Boolean, true or false
let isLoggedIn = true

//. BigInt, takes the much larger number. Generally ends with n
let stockNo = 546878971654699846841987987894n

// Symbol, unique

// null, standalone value.
let state = null;

// undefined, where the variable has been declared but not initialized or given a value.

// typeof, 



