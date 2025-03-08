//  ******************** ******************** *********** Higher order function******************** ********************

function outer(a){
    console.log(a);
    a();
}
function hey(){
    console.log("hello");
}

outer(hey);




//  ******************** ******************** *********** closure ******************** ********************

function main(){
    let a = 10
    let hey = ()=> {
        // console.log(a)
    }
    return hey
}
const a = main()
a()
a()



function x(){
    var b = 11
    function y(){
        // console.log(b);
    }
    return y
}
const na = x()

na()
na()
na()