// const name = "rohan     "

// console.log(name.trueLength);

/*

Array    ------|
Function ------|-----> Object ----> Null    
String   ------|

*/


const arr = ["ironman","thor"]

const heroPower = {
    ironman: "fly",
    thor: "hammer",

    getPower: function(){
        console.log("super power of heros")
    }
}

Object.prototype.hello = function(){
    console.log("hello for all heros");     //access by all Array,string,Function
    
}

Array.prototype.say = function(){
    console.log("Only use on Array");       //access by only Array
    
}

heroPower.hello()
arr.say()



// ***************************************************************************************************************************************
//Prototype based inheritance, inherite the property or value from another object

const user = {
    name: "rohit",
    email: "rohit.com"
}


const teacher = {
    makevideos: true
}

const Tstaff = {
    available: true
}

const manger = {
    assignment: "js",

    __proto__: Tstaff
}

teacher.__proto__ = user;
// console.log(teacher.name);


////////////////////////////// modern syntax
//setPrototypeOf

Object.setPrototypeOf(Tstaff, teacher);

console.log(Tstaff.makevideos);




//create own prototype method

//const usernameObject = new String("virat   "); // Equivalent to the temporary String object


const username = "virat   ";

String.prototype.trueLength = function(){
    console.log(this);                                  //this Context: Within trueLength, this refers to the temporary String object wrapping "virat ".
    console.log(`True length is : ${this.trim().length}`);
}
username.trueLength()
"rohit  ".trueLength()



//**************************************************************************************************************************************************

//call 

function setUserName(username){
        this.username = username
        console.log("call setusername",this);       
}

function createUser(username, email, password){
    setUserName.call(this, username)        //The call() method allows you to call a function with a specific this value and individual arguments.
    //call pass current execution context to another function
    
    this.email = email;
    this.password = password;
    console.log(`gg ${username} bb  ${email}bbb ${password}`);
    
}

const one = new createUser("rohit","roa@.com","1122")
console.log(one);












