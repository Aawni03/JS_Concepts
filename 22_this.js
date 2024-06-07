add1(4); //. Annomoyous function, canbe invoked before declaration
function add1(num) {
  return num + 1;
}

//- Expression, when the function is being placed in the variable
// sum(7)  //. Expression, results in error If tried to invoke before initialization.
const sum = function add2(num) {
  return num + 1;
};

// : ----------------------------------------------------------------------

//-  this, current Context(Values),
//. i.e anything with in the scope.
const user = {
  userName: "Asd",
  email: "aawni@gmail.com",
  welcomeMsg: function () {
    console.log(`${this.userName}, Welcome to the website`);
  },
};

user.welcomeMsg(); // Asd
user.userName = "Mnop";
user.welcomeMsg(); //Mnop
console.log(this); //.{} in Node, this refers to the parentObject of the function or the {}
//. whereas, in browser this refers to the WindowObject.

//- Arrow Function

// Normal
function Norcode() {
  let userName = "Aawni";
  console.log(this); //refers to the Global refrence
}
Norcode();

// Arrow
const ArrowCode = (num1, num2) => {
  return num1 + num2;
  console.log(this); // {}
};
ArrowCode();

// Implicit return
const ImplicitFunc = (num1, num2) => num1 + num2;
ImplicitFunc();

// Impilicit return with Object
const implicitFunc2 = (num1, num2) => ({ userName: "Asd" }); // should be returned within the ()



// Type of function 
const arr = [1, 2, 5, 8, 6, 4];
arr.forEach(function () {});
arr.forEach(() => {});
arr.forEach(() => ({}));
