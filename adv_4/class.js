// class comes after ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpass(){
        return `${this.password}xyz`
    }
    capletter(){
        return `${this.username.toUpperCase()}`
    }
}

const rohit = new User("rohit","m@gmail.com","1111")
console.log(rohit.encryptpass());
console.log(rohit.capletter());





//behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptpass = function(){
    return `${this.password}xyz`
}

User1.prototype.capletter = function(){
    return `${this.username.toUpperCase()}`
}


const virat = new User1("virat","@gmail.com","1000")
console.log(virat.encryptpass());
console.log(virat.capletter());






//inheritance

class User2{
    constructor(username){
        this.username = username
        console.log(this);
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends User2{
    constructor(username,email,password){

        super(username)
        this.email = email;
        this.password = password;
        // console.log(this);
    }
    course(){
        console.log(`new course added by ${this.username}`);
    }
}

const rahul = new teacher("rahul","@gmail.com",2727)
const suresh = new User2("suresh")

rahul.course()
rahul.logMe()

suresh.logMe()


console.log(rahul === teacher);     // false because rahul get instance not exact value
console.log(rahul instanceof User2);     //true







