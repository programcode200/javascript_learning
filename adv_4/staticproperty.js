class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`username is ${this.username}`);
    }

    //in sometimes we dont want to give access for object that create from class instance
    static createId(){      
        return `1233`
    }
}

class teacher extends User{
    constructor(username, email){
        super(username)     //setUserName.call(this, username) 
        this.email = email;
    }
}



// const rohit = new User("rohit")
// console.log(rohit.createId())

const phone = new teacher("iphone","i@phone.com")
phone.logme()













