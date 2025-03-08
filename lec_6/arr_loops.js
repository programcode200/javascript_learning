// ******************************************************  Loop on Array ***************************************************

// for of



const arr = [1, 2, 3, 4, 5, 6]

for (const i of arr) {
   
    // console.log(i);
}



const greetings = "hello world!"

for (const greet of greetings) {
    if (greet === " ") {
        // console.log("h is removed");
        continue
    }
    // console.log(greet);
}



// ****************************************************** Map ***************************************************

// map used for unique values, does not print same value


const map = new Map()
map.set(1,"a");
map.set(2,"b");
map.set(3,"c");
map.set(4,"d");
map.set(4,"d");


// const iterator1 = map.entries()
// console.log(iterator1);

// map.clear()
// console.log(iterator1.next().value);
// console.log(map);
// console.log(iterator1.next());
// console.log(iterator1.next().value);
// console.log(iterator1.next());


// console.log(map);




//for of

// for (const [key, value] of map) {                   //destructure of array by [key,value]
//     console.log(key, ":", value);
// }

// for (const key of myMap.keys()) {
//     console.log(key);  // Outputs: a, b, c
// }


// const myobj = {
//     'game1': "pubg",
//     'game2': "coc",
//     'game3': "free fire",
//     'game4': "minecraft"
// }

// for (const a of myobj) {
//     console.log(a);
// }                            // objects are not working on (for of) loop



// for in

const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
}



for (const key in obj) {
    //console.log(obj[key]);                            // this use get values
    // console.log(`${key} for ${obj[key]}`);
}


// for (const key of Object.keys(myObject)) {
    // console.log(key);  // Outputs: a, b, c
// }


const programming = ["python", "java", "javascript", "c++"]

for (const key in programming) {
    //console.log(key);            //0 1 2 3 this is output because array keys start from ( 0 ) and by default its number

    // console.log(programming[key]);
}



                                        //an iterable in JavaScript is something you can loop over.
                                        // iterating means going through each item in a collection, one by one.  by using loops
for (const key in map) {                //this is not apply on map ,because map is iterable by only for of
    console.log(key);
}



// for in {object}

// for of {array , map}












