//Immediately Invoked Function Expression (IIFE)

/*Global scope pollution refers to the situation where too many variables or functions are defined in the global scope 
(outside of any function or block). This can lead to several issues and is generally considered bad practice in JavaScript 
and other programming languages. */


//(IIFE use for remove global scope pullution)


// function main(){
//     console.log("hello database");
// }
// main()      <= normal function



(function main(){
    //named IIFE
    console.log("hello database");
})();                                //   use ; to write two IIFE at the end


((name) =>{
    //Unnamed IIFE
    console.log(`hello ${name}`);
})("virat");


let result = (function add(num1, num2) { 
    //parameterize IIFE
    return num1 + num2 
})(10, 22);

// console.log(result);                                                    





