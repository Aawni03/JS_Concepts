function greet(){   //. function Defination
    console.log('Hello user');
}
greet   //. function Refrence
greet() //. function Execution


//= parameters, while passed in the function declaration
//= Arguments, passed while execution of the function.

function add(num1,num2){
    console.log(num1+num2); // console, just prints the value.It doesn't returns anything
    return num1+num2;   // return keyword, returns the value from a function to the assigned variable.
}
add(2,3) // 5
const sum = add(4,5)
console.log(sum);

function loginUserMsg(userName) {
    return `${userName} has just logged In` //. returns but doesn't prints anything
}
loginUserMsg('qwe') // doesn't print anything, as nowhere in the above code we asked the function to print the values.
console.log(loginUserMsg('Abc'));  // Abc, prints the value
console.log(loginUserMsg());  // undefined

// way__2 ------
function loginUserMsg(userName) {
    if(userName === undefined){
        console.log('Please enter the userName');
        return; //. returns undefined & Majorly blocks to execute the next part of the code.
    }
    return `${userName} has just logged In`
}
loginUserMsg()  //. undefined, if no value passed
loginUserMsg('Aawni')  //. Default value passed, which never allows to execute the undefined block
loginUserMsg('Bhawani_K')  //. Here, the newArgument will get overwrite with the default value.


//- Function Object & Arrays=========================================

function calculateCartPrice(num1){
    console.log('num1----------',num1);
    return num1;
}
calculateCartPrice(2,400,399);  
// doesn't prints anything as it is expecting only 1 argument. 
// but how can we pass multiple arguments to the same function. Rest Parameter is solution.




//- REST Operator, where we dont know the no. of arguments

//1.
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(2,400,399));

//2. 
function calCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calCartPrice(200,400,399,700,1200));

// Objects in Function
const user = {
    userName:'Aawni',
    email:'aawni@gmail.com',
    repoCount:22
}
function handleObj(anyObj){ //. anyObj can take any Object
    console.log(`${anyObj.userName} has the repoCount of ${anyObj.repoCount}`);
    return anyObj
}
handleObj(user) //. We need to pass which user to be considered.
handleObj({
    userName:'Asd',
    repoCount :12
})

//- Array in Function

const Arr = [10,20,30,40]
function ArrFunct(anyArr){
    return anyArr
}
console.log(ArrFunct(Arr));


//- We need to always check if the object has the required properties, 
//- and the object being passed as the parameter have the typeOf as Object
//- This is being handled automatically in TypeScript. 



