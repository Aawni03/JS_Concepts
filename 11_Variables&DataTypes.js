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
let accountState;   //will result in undefined.
    // can be redeclared and reassigned


// GLOBAL SCOPE
// VAR ========================================================
// depricated, don't use
var accPwd = '1234'
accPwd = 'ASD'

accCity = 'Banglore'
accCity = 'Bhubaneshwar' // variables can also be declared without using any variables keyword. Possible but don't use.

console.log([accountId, accEmail, accPwd, accCity, accountState]);

