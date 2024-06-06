//- Declaration

// Literals, never creates the singleton
const mySym = Symbol('key1')

const JSUser = {
    'full name':'Aawni_K',  //. Strings can only be accessed by the [].
    location:'Bhubaneshwar',
    email:'aawni@gmail.com',
    isLoggedIn:true,
    lastLoginDays:['Monday', 'tuesday'],
    [mySym]:'SymVal'
    //. Symbol are fetched or reffered using []. 
    //. If the symbol is not placed in [], it will not give any error but considers itself as a String.
}


console.log(JSUser.location);
console.log(JSUser['full name']);  // strings can only be accessed using []
console.log(JSUser['email']);
console.log(JSUser[mySym]);
console.log(typeof mySym);


//- Object Freeze
JSUser.email = 'aawni@outlook.com'
// console.log(JSUser);
// Object.freeze(JSUser)   //. Freezes the Object.

JSUser.email = 'aawni@yahooo.com'
// console.log(JSUser);   
//. Doesn't create any error. 
//. but as the object got freeze this change will not be populated.

JSUser.greet = function() {
    console.log('Hello JSUser');
}
JSUser.greetTwo = function() {
    console.log(`Hello ${this["full name"]}`);
}
console.log(JSUser.greet);  // refrence of a function
console.log(JSUser.greetTwo()); // execution of a function.



// Constructor, always creates the singleton
// Singleton, 
// Object.create

const user = new Object()   //. Singleton Object, by using constructor.
user.id = '342945',
user.name = 'Aawni_K'
user.isLoggedIn = true
console.log(user);

const regularUser = {
    email:'asd@gmail.com',
    fullname:{
        firstName:'Asd',
        lastName:{
            middleName:'',
            lastName: 'K'
        }
    }
}

console.log(regularUser.fullname.lastName.lastName);

// On getting the complex response from the apis, we must use ? or the Ternary Operator to check for the presence of the values.


//- Combining Of the Objects

const obj1 = {
    1:'a',
    2:'b'
}
const obj2 = {
    a:1,
    b:2,
    c:3
}
const obj3 = Object.assign(obj1, obj2)
const obj3A = Object.assign({}, obj1, obj2)
//. same result as above but guarantees to be an Object.
//. 1st is always a target. so this guarantees we are passing all the source objects to the {}.
//. if we dont give {}as 1st parameter, then the Obj in 1st parameter is considered as target while all other as source. Where all the source obj gets combine to the TargetObject.

console.log(obj3);

//- Spread Operator for Object
const obj4={...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        id:11,
        userName:'a',
        email:'a@gmail.com'
    },
    {
        id:21,
        userName:'b',
        email:'b@gmail.com'
    },
    {
        id:31,
        userName:'c',
        email:'c@gmail.com'
    }
]

console.log(users[1].email);
console.log(Object.keys(JSUser));   //. can fetch all the keys of an Object
console.log(Object.values(JSUser)); //. fetches all the values of an Object

console.log(Object.entries(JSUser));    
//. makes each entry as an array, and stores all the array entries in an Array.






