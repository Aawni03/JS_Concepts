// iife__Immediately invoked Function Expression

// to execute the db file
// to keep the funtion safe from the global scope pollution

//- Normal Function-----
function funcA(){
    console.log('DB connected');
}
funcA();

//- iife ---- ()()
//. Always check while writting the iife function, 
//. the last function should be terminated properly by ;
(function funcIife(){
    console.log('Iife connected.....');
})();

// Iife using ArrowFunc
(()=>{console.log('Iife using Arrow..........');})();

// Iife by using parameter
//. think it as a normal function
((user)=>{console.log(`Hello ${user}`);})('Aawni');

// Named IIfe
(function namedIife(){
    console.log('Named Iife............');
})();


