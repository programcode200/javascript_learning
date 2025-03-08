//initialization , condition , increment or decrement

// for loop



// table 1 to 10
for(let i = 1; i <= 10; i++){
    //console.log("this is I value "+ i);
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i}*${j}: ${j*i}`);
        
    }
}


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is no");
    }
    //console.log(i);   
}



let myArray = ["ironman", "thor","spider man", "hulk", "dr strange"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
   
}


// ******************************************************  break and continue *********************************************************


for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        // console.log("detect 5");
        break;
        // continue;
    } 
    // console.log(`value is ${i}`); 

}








// ******************************************************  while and do while Loop ***************************************************


//while

let i = 1
while (i <= 10) {
    // console.log(`value is ${i}`);
    i+= 2
    
}


let myarray = ["ironman", "thor","spider man", "hulk", "dr strange"]
let arr = 0
while (arr < myarray.length) {
    // console.log(`value is ${myarray[arr]}`);
    arr+= 1
}



let index = 1

while (index <= 10) {
    // console.log(`this outter ${index+1}`);
    index++

    let j = 1
    while (j <= 10) {
        // console.log(`this is inner ${index} * ${j} = ${index * j}`);
        j++
    }
    // console.log("");
 
}




//do while 


let score = 12                                //always print do statement
do {
    console.log(`this is :${score}`);
    score ++                                 // increment
} while (score <= 10);                       // condition
















