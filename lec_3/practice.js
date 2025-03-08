
let sentence = "The quick brown fox jumps over the lazy dog";
let word = "fox";

let result = sentence.includes(word) ? 'is' : 'is not';
console.log(result); // Output: "is"



const no = new Number(1032.2387);
// console.log(no.toExponential());

// console.log(no.toFixed(3));

// console.log(no.toLocaleString());

// console.log(no.toPrecision());
// const no1 = no.toString()

// console.log(typeof no1);






//*********************************************************************************************************


//------------------------------------------------------Math-------------------------------------------------


// console.log(Math);

// console.log(Math.abs(-38)); //it only use for negative(-) value not positive(+) values

// console.log(Math.round(46.9)); // output 47 round of the value
// console.log(Math.ceil(3.3)); //add greater value than 3.

// console.log(Math.floor(3.9)); //add less value than 4.

// console.log(Math.sqrt(49)); //calculate root value 7
// console.log(Math.min(23,44,22,11,46,77)); //calculate minimum value
// console.log(Math.pow(20,2)); //20^2 = 400

// console.log(Math.random()); //it give value between 0 to 1 ..eg 0.343 any

// console.log(Math.random()*10 + 1);
// console.log((Math.random()*10) + 1);

// const min = 10
// const max = 20 

// // console.log(Math.floor(Math.random()*(max - min + 1)) + min); -----***********  Important  **********--------------

// console.log(Math.PI);



//*********************************************************************************************************



//------------------*********************** Dates ****************************-------------------------------




// console.log(Date());

// const day = new Date()
// console.log(day.toString()); //Fri Jul 12 2024 18:54:23 GMT+0530 (India Standard Time)

// console.log(day.toLocaleString()); //12/7/2024, 6:54:23 pm

// console.log(day.toDateString()); //Fri Jul 12 2024

// console.log(day.toLocaleDateString()); //12/7/2024

// console.log(day.toTimeString()); //18:54:23 GMT+0530 (India Standard Time)

// console.log(day.toLocaleTimeString()); //6:54:23 pm



// let myDate = new Date(2023,00,23)

// let myDate = new Date("2024-04-10")
let myDate = new Date("10-4-2023")
// console.log(myDate.toLocaleString());
 
let timeStamp = Date.now()

let nowDate = new Date(2024,0o6,12)

// console.log(timeStamp);
// console.log(nowDate.getTime()); //give in time 1720722600000


console.log(nowDate.getTime()); 



const date = new Date();
const options = {
    weekday: 'long',   // Displays full weekday name (e.g., "Monday")
    year: 'numeric',   // Displays full year (e.g., "2024")
    month: 'long',     // Displays full month name (e.g., "July")
    day: 'numeric',    // Displays day of the month (e.g., "12")
    hour: '2-digit',   // Displays hour in 24-hour format with leading zeros (e.g., "08")
    minute: '2-digit'  // Displays minutes with leading zeros (e.g., "05")
};

console.log(date.toLocaleString('en-US', options));
// Output example: "Wednesday, July 12, 2024, 08:05"

console.log(date.toLocaleString('en-IN', options));


