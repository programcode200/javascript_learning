//********************************************************************************************************************************************************************

/* Yes javascript have classes. this feature was introduced with ES6 . However its important to note that Javascript is primarily
    a ||| prototype-based language |||. and its classes are primarily syntactic sugar (just look like class ) over ||| existing prototype-based inheritannce ||| mechanisms.
    in other words provides a more familier syntax for developrs come from c++, java. */

// object literals means really an object

//instances (new, this)

/*
********************************************************************************************************************************************************
1. Abstraction

    Definition: Abstraction involves hiding the complex implementation details of a class and exposing only the necessary parts to the user.
    It simplifies the use of objects by providing a clear and simple interface.


************************************************************ Codeeeeeeeeee *********************************************


    // Abstracting the complexity of a Car with a simple start method
    class Car {
    start() {
        this._igniteEngine(); // Private method not exposed directly
        console.log('Car started.');
    }

    // Complex method hidden from the user
    _igniteEngine() {
        console.log('Engine ignited.');
    }
}

    const myCar = new Car();
    myCar.start(); // Output: Engine ignited. Car started.
    // The _igniteEngine() method is hidden from direct use


*******************************************************************************************************************************************************************************************************


2. Inheritance
    Definition: Inheritance allows a class (child) to inherit properties and methods from another class (parent), promoting code reuse.


*********************************************************************************************************************************************************************


3. Encapsulation
    Definition: Encapsulation restricts direct access to some of an object’s components, usually by using private properties and methods.
    It helps to protect the object's state and control how it's modified.


************************************************************************  codeeeeeeeeeeee ************************************************************************


            class BankAccount {
                #balance = 0; // Private property

                deposit(amount) {
                    if (amount > 0) {
                        this.#balance += amount;
                        console.log(`Deposited: $${amount}`);
                    }
                }

                getBalance() {
                    return this.#balance;
                }
            }

            const account = new BankAccount();
            account.deposit(100); // Deposited: $100
            console.log(account.getBalance()); // Output: 100
            // account.#balance = 1000; // Error: Private field '#balance' must be declared in an enclosing class


****************************************************************************************************************************************************************

4. Polymorphism
    Definition: Polymorphism allows methods to have the same name but behave differently depending on the object that calls them. 
    It lets objects of different classes be treated as objects of a common superclass.


**************************************************************** codeeeeeeee ********************************************************************************
            // Parent class
            class Shape {
                draw() {
                    console.log('Drawing a shape.');
                }
            }

            // Child classes with different implementations of draw
            class Circle extends Shape {
                draw() {
                    console.log('Drawing a circle.');
                }
            }

            class Square extends Shape {
                draw() {
                    console.log('Drawing a square.');
                }
            }

            const shapes = [new Shape(), new Circle(), new Square()];
            shapes.forEach(shape => shape.draw());
            Output:
            Drawing a shape.
            Drawing a circle.
            Drawing a square.

*/

//*************************************************************************************************************************************************************************

//Object Literal (create object)

const user = {
    username: "virat",
    logincount: 11,
    signedIn: true,

    userdetails: function(){
        console.log("got user details from database");
        console.log(`username ${this.username}`);
        console.log(this);

    },
    age: 22
}

// console.log(user.username);
// console.log(user.userdetails());
// console.log(this);



//***************************************************************************************************************************************

//this use into current context
//The constructor() method is a special method for creating and initializing objects created within a class.

// New keyword is constructor function, this allow to create multiple instances from one object litrals
// New keyword help to create new context.



function std(username, age, login) {
    this.username = username;
    this.age = age;
    this.login = login;

    this.greet = function (){
        console.log(`welcome ${this.username}`);        // need to return for dont want undefined
    }

    return this   //implicitly it is return so if you dont return then ok
}

let userOne =  new std("rohit",30, true);
const userTwo = new std("virat",22,false)

// console.log(userOne.constructor);           //constructor is reference of own means std
// console.log(userTwo.greet());
// console.log(userOne instanceof std);        //true









//***************************************************************************************************************************************


//Prototype

//function is function but we can handle and manage as object because at the end, in js is Object

function mul(num) {
    return num * 5;
}

mul.a = 5;

console.log(mul(5));            //25
console.log(mul.a);             //5
console.log(mul.prototype);     //{}



//When you use the this keyword inside a function, it behaves like a constructor function only if you call the function with the new keyword.

function createUser(name, score) {
    this.name = name;                   //You use this to set up properties and values on the new object.
    this.score = score;

}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.print = function(){
    console.log(`score is ${this.score}`);
    
}

const rohit = new createUser("rohit", 100);     //without New he didn't know that createUser fn properties are access outside of that function using new automatically access the property that outside 

rohit.print()


//********** this means jisne bhi bulaya ****************** 

//****************************************************** Important Notes  ********************************************************************************* */

/*

javascript it is not giving constructors only by class it give on use of NEW keyword.


function User(name, score) {
    // `this` refers to the new object being created
    this.name = name;    // Adds a property `name` to the new object
    this.score = score;  // Adds a property `score` to the new object
}

// Create a new object using the `User` constructor
const user1 = new User('Alice', 95);

*/

//If you call the function without new, like User('Alice', 95), this will refer to the global object (or undefined in strict mode), not a new instance. This can lead to unexpected behavior.

/*
NEW KEYWORD

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
                       This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
                            If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*******************************************************************************************************************************************************************************************


The new object is returned:=

function Car(make, model) {
    this.make = make;           // Car is the constructor function. It is designed to create objects with the make and model properties.
    this.model = model;

    if the constructor explicitly returns an object (like { make: 'Ford', model: 'Mustang' } in your code),
    that returned object becomes the result of the new operation.

    return { make: 'Ford', model: 'Mustang' }; // Returning an object
}

const myCar = new Car('Toyota', 'Corolla');     //Normally, using new with a constructor function creates a new object and assigns this to that object.
console.log(myCar); 

// Output: { make: 'Ford', model: 'Mustang' }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Phone(model) {
    this.model = model;
    return 'iPhone'; // Returning a string (primitive value)
}

const myPhone = new Phone('12 Pro');
console.log(myPhone); 
// Output: Phone { model: '12 Pro' }




the function is return non primitive value(array, fn, obj), not primitive value (string,number)

*/





function User(name, score) {
    this.name = name;
    this.score = score;
}

// Create a new instance of User
const user1 = new User('Alice', 95);
const user2 = new User('Alice', 1818);

console.log(user1.name);  // Outputs: Alice
console.log(user2.score); // Outputs: 95

//********** this means jisne bhi bulaya user1.name means this.name ,this means user1 ne bulaya****************** 


/*
user1 is a new object created by new User('Alice', 95).
Inside the User function, this refers to user1.
user1 ends up with name set to 'Alice' and score set to 95.

*/









