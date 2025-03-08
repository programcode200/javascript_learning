//*************************-----------Array---------------********************

const myArr = [2, 4 ,5 ,10 ,43, 50]   


// const newArr = new Array(10,12,14,16)

// console.log(newArr);

// console.log(myArr[4]);



// //Array methods


// myArr.push(12)
// myArr.push(17)
// myArr.pop()

// myArr.unshift(98)  //add on first index 0
// myArr.shift()

// console.log(myArr.includes(22)); 
// console.log(myArr.indexOf(286)); //if not exist then will give -1

// const updateArr = myArr.join()  //convert type into String and bind array too

// console.log(myArr);
// console.log(updateArr);
// console.log(typeof updateArr); // value add same but type is String 





//*********************-------------------slice and splice---------------********************

// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)

// console.log(myn2);
// console.log("C",myArr);

//output
/*

A [ 2, 4, 5, 10, 43, 50 ]
[ 4, 5 ]
B [ 2, 4, 5, 10, 43, 50 ]
[ 4, 5, 10 ]
C [ 2, 43, 50 ]

*/


//************************************-----------------------------------*********************************


const mcu_heros = ["ironman", "captain", "spiderman", "thor"]
const dc_heros = ["batman", "superman", "flash", "joker"]

// mcu_heros.push(dc_heros)
// console.log(mcu_heros);     //array inside array

// console.log(mcu_heros[4]);

//output
/*
[
    'ironman',
    'captain',
    'spiderman',
    'thor',
    [ 'batman', 'superman', 'flash', 'joker' ]
]
*/

const all_heros = mcu_heros.concat(dc_heros);  //concat return and use new array insted of doing changes in old array not like push
// console.log(all_heros);


// ... means spread divide into single element and attach all

const all2_heros = [...mcu_heros, ...dc_heros]
// console.log(all_heros);

const another_array = [1, 2, 3, 5, [6, 7, 8], 4, 9, [2, 3, 4, 5, 2,[3, 4, 4,[3, 4, 5, 10], 4]]]

const real_array = another_array.flat(Infinity)  // flat()  return new array with all sub array elements, 

//parameter use for depth like how much deep want to give mostly give Infinity means add automatically all depth array
// console.log(real_array);



//******************************************************** Array Methods -----------------------------------------------------------

/*
    Array.isArray()     check is array or not give true or false
    Array.from()        convert into array wether it is string or object
    Array.of()          convert into array variable,array,all elements too
    Array.fromAsync()

*/


console.log(Array.isArray("rohan"));
console.log(Array.from("rohan"));


//Array.of()
console.log(Array.of(1,2,3,4,6,7));
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]


//how to object  key and value array  

// const obj = {name : "rohan", age: 12, location: "mumbai"};
// const keyArray = Object.keys(obj)
// console.log(keyArray);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//.from()

// const set = new Set(["foo", "bar", "baz", "foo"]);  //Set use for remove duplicate value
// console.log(Array.from(set));





//*************************************************** Map --------------------------------------

// const myMap = new Map();

// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set(1, 'number key');
// console.log(myMap);              // Output: Map { 'name' => 'John', 'age' => 30, 1 => 'number key' }






//---------------------------------for retrieving value=============================

// console.log(myMap.get('name')); // Output: 'John'
// console.log(myMap.get(1)); // Output: 'number key'





//--------------------------------- remove key-value pairs============================

// myMap.delete('age');
// console.log(myMap); // Output: Map { 'name' => 'John', 1 => 'number key' }




// console.log(Array.isArray([1]));
// console.log(Array.isArray(new Array(1,2)));






const arr = [ 
    {
        name: "a",
        age: 23
    },
    {
        name: "b",
        age: 22
    },
    {
        name:"rohan",
        age:11
    },
    11,
    "rohan"
]

console.log("****************************************************************");



// const qa = arr[4]
// console.log(`name :  ${qa[1]}`);


arr.map( (data)=>{
    console.log(data);
    
})
