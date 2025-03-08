
let a = 7;

a = String(a)
// console.log(a);

// console.log("the type is",typeof a);

// console.log(typeof a);


let bigNum = 48n;

// console.log(typeof bigNum);

const ibg ={
    name : "virat",
    age  : 24,
}

// console.log(typeof ibg);




let num = new Number(34)

let str = new String("hello")

let bol = new Boolean(true)

let emp = null

const ye = 27n

let un  


// console.log(typeof un);






// function (typeof) is function object

// primitive data type (typeof) is object

/* non primitive data type (typeof) is 
    12=Number
    "fhdb"=String
    true=Boolean
    null=object
    undefined=undefined
    4874n=bigint
    unique use Symbol eg... id=Symbol('name')
*/

var b = null;

// console.log(typeof b);


// let value = null;

// if (value === null) {
//     console.log("The value is null");
// } else {
//     console.log("The value is not null");
// }

// console.log(value);




//========================================================================================================
//conversions or camparision operators



// console.log(2 > 2);
// console.log(10 >= 10);

//change data type by default and check the conversion



//null: A special value representing the absence of any object value or a deliberate non-value.
//undefined is converted to NaN (Not-a-Number).

// console.log("10" >= 2);
// console.log(2 <= "7");
// console.log("1" > 2);
// console.log("10 "> "he");
// console.log(undefined <= undefined);
// console.log(null == undefined);
// console.log(null === Object);



// implicit (automatic) or explicit (manual).

//In JavaScript, type coercion refers to the automatic or implicit conversion of values from one data type to another. 
//when conversion use <= ,>= then null value become 0 compare that 0 to other value


// == , < , > use as null
//equality check and comparison work different in js

// console.log(null == 0);
// console.log(null < 0);
// console.log(null <= 1);
// console.log(null >= 1);
// console.log(null > 0);


//when do comparison with undifined always give false

// console.log(undefined == "a");
// console.log(undefined <= 0);


// triple equal check data type and doesnot change datatype"==="

// console.log(null === null);
// console.log("2" === 2);


// console.log(2 + "3");                       //"23"  string concatination

// console.log(-"44");-44
//                                               //convert into number
// console.log(+"44");44



//prefix and postfix
// let x = 5;
// console.log(++x);// 6 (pre-increment, increments before returning)
// console.log(x); 
// console.log(x++);// 6 (post-increment, increment happens after the value is returned.)
// console.log(x); 



let y,z=5


//prefix
y= ++z;
console.log(y);     //6
console.log(z);     //6

//postfix
//first value stored in n = 5 then increase m value to 6
let m = 5
let n = m++
console.log(n);     //5
console.log(m);     //6