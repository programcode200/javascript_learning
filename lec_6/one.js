//if

// if (2===2) {
//     console.log('hey');
// }


//operators  <, >, <=, >=,==, !=, ===


// const tempreture = 40

// if (tempreture > 50) {
//     console.log(" hot ");
// }
// else{
//     console.log("normal tempreture");
// }




//you cannot access the variable out of scope

// const score = 200

// if (score > 100) {
//    const power = "fly"
//    console.log(`you can ${power}`); 
// }

// console.log(`you can ${power}`); 



const balance = 1000

// if (balance > 700) console.log("heyy");                         //shorthand notation


// if (balance < 500) {
//     console.log("less than");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("greater than");
// }



const userLoggedIn = true
const debitcard = true
const gmailId = false

if (userLoggedIn && debitcard && 2==2) {     //compalsory statisfy all condition
    //console.log("use can access");
    
}

if (gmailId || userLoggedIn) {               //need statisfy only one condition
    //console.log("you can login");
    
}



//*******************************--------------  switch Case -----------------------------****************************

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 10;

switch(month){
    case 1:                                     // we can use " "(string too) in case 
        console.log("january");
    break;                                      // if break not use then run code after that statement
    case 2:
        console.log("february");
    break;
    case 3:
        console.log("march");
    break;
    case 4:
        console.log("april");
    break;

    default:
        //console.log("default case");
        break;
}




//*******************************-------------- Truthy and falsy -----------------***********************************



const useremail = []      //assume that the value is stored

if (useremail) {
    //console.log("got email");
}
else{
    console.log("didn't get email");
}

// falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN                               


//truthy value

//" ", "0", "false", [], {}, function(){ }


// if (useremail.length === 0) {                   //check that array is empty or not
//     console.log("Array is empty");
// }



const empobj = {}

if(Object.keys(empobj).length === 0){
    //console.log("empty");
}


if (false == ' ')       // false == 0, false == "", 0 == ""      ********* false and " " convert into (0)
{
    console.log("this is right");
}



//***********************----------- Nullish coalescing Operator (??): work on (null undefined) ------------*************************


let val;
// val = 9 ?? 10
//val = undefined ?? 1

val = null ?? 11 ?? 20


// console.log(val);




//*********************************------------- Terniary Operator ------------*************************



//condition ? true : false

const score = 200;

//score <= 100 ? console.log("greater value ") : console.log("less value");       //dont use ; after true statement

console.log(6 == "6");




// convert string into number

let str6 = "";
let num6 = +str6;

