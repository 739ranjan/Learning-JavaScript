// Immediately Invoked Function Expression (IIFE)

// it is used when we want to execute the fuinction just afer its defination
// it is used to avoid the pollution of global variable and execute the function
// this kind of function needs termination i.e, ; inorder to stop the esecutionbecause it is not knowing when to stop the function
/**
 syntax
 (for function defination)(for function call);
 */
(function chai(){   // it named IIFE
    console.log(`Database connected`)
})();

// same function using arrow function
(() => {    // it is an IIFE without any name
    console.log("arrow IIFE function");
})();

// IIFE function having argument
((name) => {
    console.log(`hii ${name}`)
})("Shashi");

