//************************************************************* Asynchronous *************************************************************


//Async-Await >> Promises >> CallBacks



// console.log("A");
// console.log("B");

function timer(){
    // console.log("waiting for you");   
}
setTimeout(timer, 2000) //timeout

// console.log("C");

// setTimeout( ()=>{
//      console.log("D");
// },2000)



//************************************************************* Callback hell *************************************************************


function sum(a,b){
    console.log(a + b);   
}

function calculator(y,s, sumcallback){
    sumcallback(y,s)
}
// calculator(10,10, sum)






// get data after some time by sequence
function getData(id, nextdata){
    setTimeout(() => {
        // console.log("data",id);

        if(nextdata){
            nextdata();
        }
    }, 2000);
}


// callback hell

getData(1, ()=>{
    getData(2, ()=> {
        getData(3);
    });
})


/*
data 1
data 2
data 3
*/





//*************************************************************  Promises *************************************************************



// promise is "eventual completion of task. it is an obj in JS"
//promise is an object
// promises are 3 state Resolved, Reject, Pending  



let promises = new Promise((resolve, reject) => {
        // console.log("i am promise");
        resolve(" successful");     // these are function which is handled by js
        // reject(" error occured");
});



//promise

// function getData(id, nextdata){
//     return new Promise( (resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data",id);
//             resolve("successful")
//             if(nextdata){
//                 nextdata();
//             }
//         }, 6000);
//     })  
// }




// use of promises after get promise or handling


// fulfilled : promise.then( (res) =>{})
//reject : promise.catch( (err) =>{})



const getPromise = ()=>{
    return new Promise((resolve, reject) => {
    // console.log("i am promise");
    // resolve(" successful");  
    // reject("network error");
    }); 
};


let promise = getPromise();
promise.then( (res) => {
    console.log("successfully executed",res);
})

promise.catch( (err)=> {
    console.log("Error is occured :",err);
    
})





//************************************************************* Promise chain *************************************************************



function asynFn(){
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            // console.log("data is generated 1");
            resolve("success")
        }, 3000);
    })
}

function asynFn2(){
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            // console.log("data is generated 2");
            resolve("success")
        }, 3000);
    })
}





//promises chaining


// console.log("fetching data.....");
// let prom1 = asynFn();
// prom1.then((res)=>{
    
//     console.log("fetching data.....");
//         let prom2 = asynFn2();
//         prom2.then((res)=>{
//     })
// })


// console.log("fetching data.....");

asynFn().then((res)=>{
    // console.log("fetching data.....");
        asynFn2().then((res)=>{
    })
})






//************************************************************* Async Await *************************************************************

//async always return promise

//await pauses the execution of its surrounding async function until the promise is settled

//we can make any function to async ******** async function myFun(){  }

// await fucn() pause execution of surrounding Fn until the promise or input is get



function api(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("weather data");
            resolve(200);
        },2000)
    })
}

async function getdata() {
    await api();  // 1st this run 
    await api();  // after 1st output print then run 2nd one

}
// getdata()



//************************************************************* IIFE *************************************************************
//immediately invoke
// IIFE cannot use again it used for run immediately and want to run 1 time ,,, if you want to use again need to copy and used



(async function() {
    await api();  // 1st this run 
    await api();  // after 1st output print then run 2nd one

})();



















