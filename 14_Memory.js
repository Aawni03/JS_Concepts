//- Stack (Primitive)
    // -> where we get the copy of the original variable. Hence, this does not affects the original value
    let str1 = 'asdf'
    let str2 = str1
    str2 = "qwerty"

    console.log(str1);  //. asdf, this provides the copy of the original variable. Thus Doesn't make any changes on the original value
    console.log(str2);  // qwerty, 

//- Heap (Non-Primitive)
    // -> where we get the refrence, Hence, this directly makes the change in the original value of the variable.
    let user1 = {
        email:'user1@gmail.com',
        upi:'user1@ybl'
    }
    let user2 = user1
    user2.email = 'userTwo@yahoo.com'
    console.log(user1.email);   // userTwo@yahoo.com, this provides the ref, such that it changes the original value.
    console.log(user2.email);


