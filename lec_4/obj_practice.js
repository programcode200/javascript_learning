//============================--------Objects-----------=============================

// const big = Object(Symbol("jd"))
// const big1 = Object(BigInt(76632n))
// console.log(big);
// console.log(big1);

// OUTPUT :     [Symbol: Symbol(jd)]
//              [BigInt: 76632n]



/* 
const person = {
    name : "hello",
    towin : true,
    permit : function(){
        console.log(`this is ${this.name} but is age ${this.age}`);

    }
};
const me = Object.create(person)

me.name="world"
me.age=12

me.permit()

*/


//============================================================object Declaration ===================================

//Singleton (make obj using constructor() then it is singleton otherwise not)
//Object.create()

// object literals


let mysmb = Symbol();                   //declare Symbol like this

const user = {
    name: "rohan",                      //automatically key is store as string
    "full name": "rohan sawant",        //console.log( user["full name"]); thats why use this method to access the data                  
    age : 12,
    location: "mumbai",
    email: "roh@gmail.com",
    isLogined: true,
    [mysmb]:"raj"                       //this is right way to declare Symbol in Object
}

// console.log(user.name);
// console.log(typeof user["age"]);
// console.log(typeof user[mysmb]);      //["mysmb"] if give " " then give undefined


//for changing value
user.name = "virat";

//Object.freeze(user)                 //changes will not done in Object using freeze


// console.log(user)

//*************************************************** Functions in Object *****************************************

user.greeting = function(){
    
   console.log("hello js");
}

user.wish = function(){
    console.log(`hello js ${this.name} thank`);
}

// console.log(user.greeting);     //give function anonymous ,function doesnot execute just give reference
// console.log(user.greeting());
// console.log(user.wish());
// console.log(user);



//=========================================== key() and values() ==========================================


// console.log(user);

// console.log(Object.keys(user));     //give output as in Array format
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("name"));       //asking or checking is that the property is  available or not


//*********************************************** Singleton *******************************************


//const emp = new Object()  //Singleton Object
const emp = {}              //Non Singleton Object

emp.id = 123
emp.name = "rohit"
emp.loggedIn = false

// console.log(emp);

const regularUser = {
    email: "rohit@gmail.com",
    fullname :{
        username: {
            firstname: "rohit",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);
// console.log(regularUser.fullname?.username.firstname);  //if fullname is exist or not for use ?


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//**************=================== */ assign() use for add object -----------------=====================

const obj4 = Object.assign(obj1/*target*/,  obj2/*source*/  ,obj3 /*source*/)

//output of obj4 =={ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//output of obj1 =={ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// const obj4 = Object.assign({} /*target*/ , obj1, obj2, obj3 /*source*/)   


//output of obj4 =={ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//output of obj1 =={ '1': 'a', '2': 'b' }
//using {} empty curly brasis object store in empty {} , not in targeted object


// const obj4 = {...obj1 , ...obj2}             //for adding two objects

// console.log(obj4);



const course = {
    name: "javascript",
    price: 999,
    teacher: "john"
}

// course.teacher
////===========================================Object Destructuring=============================================
const {teacher: instructor} = course        //we can change object name

//Object Destructuring: A way to extract properties from an object and assign them to variables.

//Object destructuring in JavaScript is a syntax that allows you to extract properties from an object and 
//assign them to variables in a more concise and readable way.

//You can now use the variables name, age, and location directly, instead of accessing them through the user object.


// console.log(teacher);
console.log(instructor);



//================================================= Json ===========================================

// In json key declare in " "
// {
//     "name": "rohan",
//     "age": 20,
//     "location": "mumbai"
//     "isLoggedIn": true
// }

//api got in array format too

// [
//     {},
//     {},
//     {}
// ]











