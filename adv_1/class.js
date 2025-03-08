//************************************************************* prototype *************************************************************

//objects are by default special property called prototype it stored multiple functions

//for setting own prototype used __proto__
const std ={
    name: "virat",
    age: 29,
    //above are properties
    ageprint: function() {
        // console.log("age",this.age);

        //function in obj
    },
};
std.ageprint()

//************************************************************* prototype creation *************************************************************

//this used for access the property of other object or methods
const emp = {
    calTax(){
        console.log("tax is 10%");   
    },
    age:22
}

const virat ={
    salary: 50000,
    calTax(){
        console.log("tax is 20%");      //when an object has prototype then he has same function of inherited object then object(own) has more priority
    }
}

const rohit ={
    salary: 40000,
}

virat.__proto__ = emp;      // __proto__ emp add into virat 
rohit.__proto__ = emp;




//************************************************************* class and object *************************************************************

// class give template(blueprint) for object.

// class toyotaCar{
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");   
//     }

//     brands(brand){
//         this.brandName = brand
//     }
// }


// // create object from class

// let lexus = new toyotaCar()
// lexus.brands("gtr")
// let supra = new toyotaCar()


//************************************************************* constructor *************************************************************


//constructor use for initialize the object

class toyotaCar{
    constructor(brand){
        // console.log("new object");
        this.brand = brand
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");   
    }

    // brands(brand){
    //     this.brandName = brand
    // }
}


// create object from class

let lexus = new toyotaCar("nissan")     //automatically invoke constructor
// console.log(lexus);

/* this way store into lexus obj
lexus{
    brand:nissan
}*/

let supra = new toyotaCar()
// console.log(supra);




//************************************************************* inheritance *************************************************************



// class parent{
//     hello(){
//         console.log("hello from parent");
//     }
// }

// class child extends parent{
    
// }

// let obj = new child();



class person{
    constructor(name){
        // this.game = "football";
        this.name = name;
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    // super(game);         //used to call constructor of its parents class to access the parents properties and methods
    //when child class want to pass info to parent class constructor so use super() keyword


    constructor(name){
        super(name);  //invoke parent class constructor
        // this.branch = branch;
    }
    work(){
        super.eat()
        console.log("solve problems");
    }
}

let engobj = new engineer();
let e1 = new engineer("rohit")



//************************************************************* practice *************************************************************
//Q1

let data = "important data"
class user{
    constructor(name,email /*properties*/){
        this.name = name;
        this.email = email;
    }

    viewdata(){
        console.log(data);
    }
}

class student extends user{
    constructor(name,email,roll_no, address){
        super(name,email);      // Pass name and email to the use user constructor
        this.roll_no = roll_no;
        this.address = address;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Roll No: ${this.roll_no}, Address: ${this.address}`);
    }
}

//Q2


class admin extends user{
    constructor(name,email){
        super(name , email);       // parent constructor
    }
    editdata(){
        data = "some new data"
    }

}


let std1 = new student("virat","vi@email",22,"mumbai");
let ad1 = new admin("ajy","sjjdhA@gmail");


std1.printDetails();
std1.viewdata()




























