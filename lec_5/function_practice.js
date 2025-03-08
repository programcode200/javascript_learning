
// function addNumber(num1, num2) {
//     console.log(num1 + num2);
// }

function addNumber(num1, num2) {
    // let result = num1 + num2;
    // return result

    return num1 + num2
}

//addNumber                                      //reference ,means function is exist there
addNumber()     //execution                     //if didnot give arguments then it will give NaN
const result = addNumber(10,21)     
// console.log("result:",result);


function loginUser(username){
    if(!username){
        return "please enter your name"
    }
    return `${username} just logged In`

}

// console.log(loginUser("rohan"))              //invoke function
// console.log(loginUser())     



//========================================== Rest Operator ==========================================

//this used when arguments are more than parameter used for add multiple cart for shopping.
//used test operator ...



function calPrice(...num1) {
    return num1
}

//console.log(calPrice(100,11,200,300))             //return value into Array format

function calPrice(val1, val2, ...num1) {
    return num1
}

//when there multiple parameter and rest operator then val1,val2 take 100,11 other goes to ...num1

// console.log(calPrice(100, 11, 200, 300))       




//====================================================================================================================================

//Object in Function


// const user = {
//     name: "virat",
//     age: 29
// }

function mainfun(anyobject) {
    console.log(`this is my ${anyobject.name} and age is ${anyobject.age}`);
}

// function mainfun(user) {
//     console.log(`this is my ${user.name} and age is ${user.age}`);
// }

// mainfun(user)

// mainfun({
//     name:"rohit",
//     age:28
// })

const myArray = [100,200,300]

function getArray(getvalue){
    return getvalue[1]
}
// console.log(getArray(myArray))


//============================----------------------------- Scope {}And Closure =============================------------------------ 

// Closure :- A closure is created when a function is defined inside another function, and the inner function 
                //retains access to the variables of the outer function.

let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const name = "virat"

    function two(){
        const web = "youtube"
        console.log(name);
    }
    // console.log(web);

    two()
}
// one()



//===================================================== interesting ===================================================

// console.log(addone(9))

function addone(num){                               //normal function
    return num + 1
}
// addone(9)

// addtwo(6)                                //giving error Cannot access 'addtwo' before initialization
const addtwo = function(num){                       //expression or store function in variable
    return num + 2
}

// addtwo(3)




//============================================== Arrow Function and this keyword =============================================

//this keyword used for current context
// this.name = name
const user = {
    username: "roh",
    price: 100,

    welcomemsg: function(){
        console.log(`${user.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomemsg()
// user.username = "jj"
// user.welcomemsg()

// console.log(this);

function hello(){
    let user = "rohit"
    console.log(this);
}
// hello()

const hey = function (){
    let user = "rohit"
    console.log(this);
}
// hey()


//================================================= Arrow =============================================================


// = () =>{
// }



const main = () =>{   
    console.log(this);
}
// main()



// const add = (num1 , num2) =>{                //explicit return use Return Keyword
//     return num1 + num2
// }
// console.log(add(10,28))

                                                // in {} need to write return keyword , without {} no need to write return keyword

// const add = (num1 , num2) => num1 + num2       //Implicit Return

// const add = (num1 , num2) => (num1 + num2)

const add = (num1 , num2) => ({name: "rohan"})         //for using object


// console.log(add(13,2))



































