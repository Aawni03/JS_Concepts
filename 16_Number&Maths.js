const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);   // [Number:100], specifically typecasting 


//> MATH ----------------------------

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4));  //. converts neg num to +ve. no change on +ve nums.
console.log(Math.round(6.7));   // rounds to the nearest integer
console.log(Math.ceil(4.2));    // rounds to the nearest larger value
console.log(Math.floor(8.7));   // rounds to the nearest smaller value.

//> random
console.log(Math.random());     // returns any num b/w 0-1
console.log((Math.random()*10) +1);   // +1 is to avoid the possibility of getting 0.
console.log(Math.floor(Math.random()*10) +1);


const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(max-min+1))+min);
// max-min+1, to be in the range of the values.
// +min, to avoid getting Zero.

// same as string for more properties and its working, We can check in browser console 
