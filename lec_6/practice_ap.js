//******************************* ******************** ************** forEach ******************************** ********************

let arr = [1,2,3,4,5,6,7,8,9,10]

let newarr = arr.forEach( (val)=> {
    return val
})

//forEach doesnot return new array change into original array

// console.log(newarr);
// console.log(arr);

//2nd way for callback
let sqrt = (arr) =>{
    // console.log(arr * arr);
}
arr.forEach(sqrt)

// console.log(arr);
 





//******************************* ******************** ************** map ******************************** ********************

// this used to create new array , callback function return value and used it in new variable
let array = [1,2,3,4,5,6,7,8,9,10]
``
let olda = arr.map( (val)=>{
    return val * val
})

// console.log(olda);
// console.log(array);



//******************************* ******************** ******* filter ******************************** ********************


//create new array of elements that give true for a condition/filter

//true value will store into new array and flase value will not store into new array


let newA = array.filter( (val) =>{
    return val % 2 !== 0;
})
// console.log(newA);
// console.log(array);



// arr.filter( (val)=> {
//     console.log(val > 1);
// })




//******************************* ******************** ******* reduce ******************************** ********************


// perform some operation and reduce the array to single value. 
// it returns that single value, return single value(eg. addition , multiplication )

//in reduce should return the value because this will return only one value, return value to accumulator


let arrnew = [11,2,4,8,10]

const a = arrnew.reduce( (acc,curr) => {
    // console.log("acc::>>>>>>>>",acc);
    // console.log("curr",curr);
    return acc < curr ? acc :curr

})

// console.log("greater",a);




let marks = [93, 33, 44, 55, 35, 95]

let above = marks.filter((val) =>{
    return val > 90
})
// console.log(above);


//******************************* ******************** ******* practice ******************************** ********************

//print array by user input
let n = prompt("enter number")

let narr = [];

for (let i = 1; i <= n; i++) {
    narr[i-1] = i
    // console.log(narr);
}
console.log(narr);

//total
let total = narr.reduce((acc, curr) =>{
        return acc + curr
},0)

console.log("total is >",total);


//product(factorial of n)
let fact = narr.reduce((acc, curr) =>{
    console.log("acc>>>>>>>>",acc);
    console.log("curr",curr);
    return acc * curr
})

console.log(fact);






