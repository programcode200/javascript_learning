// let div = document.querySelector(".div")
// let btn = document.querySelector("button")


//     if ( btn == "click"){
//         btn.onclick = () =>{
//             div.style.backgroundColor = "blue";
//             console.log("click");
            
//         }

//     }
//     else{
//         btn.ondblclick = () =>{
//             console.log("gg");
            
//             div.style.visibility = "visible"
//             div.style.backgroundColor = "red";
            
//         }
//     }
    

// let btn = document.querySelector(".btn")

// btn.onclick = () =>{
//     console.log("btn clicked");
// }


// btn.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);   //where event is occur like button,div
//     console.log(e.clientX);
//     console.log(e.clientY);
// }



// btn.addEventListener("click", () =>{
//     console.log("event click 1");
// })


// btn.addEventListener("click", () =>{
//     console.log("event click 2");
// })


// btn.addEventListener("click", () =>{
//     console.log("event click 3");
// })

// let btnclick = () =>{
//     console.log("event click 4");
// }
// btn.addEventListener("click",btnclick)

// btn.removeEventListener("click",btnclick)
                                           


// btn.removeEventListener("click",()=>{
//     console.log("event click 4");                 //this will not run because this store different location memory
// })                                                           



//Toggle button


let mode = document.querySelector("button");

let currmode = "light"

mode.addEventListener("click",()=>{
    if (currmode == "light") {
        currmode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = "light"
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currmode);
})








































