//memory

//stack(primitive)  and heap(non-primitive)
/*

--------------------------------------------------------------------stack-------------------------------------------------------
in stack get the copy of that variable

if change value in variable then change only copy not original

=================================================================================================================================

*/

let val = 10;
let val2 = val;
// console.log(val , val2)

// console.log("old value",val);

/*
------------------------------------------------------heap------------------------------------------------------------

in heap get the Reference(original) of variable value

change in all variables
===================================================================================================================
*/

let oldObj = {
    name:"rohit",
    age:34

}

let newObj = oldObj;
// console.log("new obj",newObj);

newObj.name = "ritesh";


// console.log("2nd new obj",newObj);
// console.log("old object ",oldObj);


//==================================================================================================================


//string interpolession modern way

let name = "hello";
let num = 39;

//concatination of data types


// console.log(name + "  "+num);

let result = name.concat(num);
// console.log(result); // Output: "hello39"



//modern way
// console.log(`this is ${name} message for ${num} people`);

// console.log(`this is ${name.toUpperCase()} message for ${num} people`);         //we can use funtions too

const str = new String("hello ,world")

// console.log((str).split(""));
// console.log((str).split("",5));
// console.log((str).split(",",5));




let a = 0;
let b = 8;

if(a+b == 8){
    console.log("you are right",str.slice(0,4));
    console.log(str);
}
else{
    console.log("your are wrong",str.length);      //length is not function
}

