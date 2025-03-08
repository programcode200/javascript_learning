let title = document.getElementById("title")
// title.setAttribute("id","heading")
// title.innerText = "hsdh"
// title.setAttribute("id","title")        //how to change again id after new id
// console.log(title);


// let a = title.innerHTML
// let b = title.textContent
// let c = title.innerText

// console.log(a);
// console.log(b);
// console.log(c);


let a = document.querySelector("body").childNodes;
let b = document.querySelector("#div").children[1];
let c = document.querySelector(".title");



// let a = document.querySelector("#div");

// let d = a.children[1]
// console.log(d);



// console.log(a);
// console.log(b);
// // console.log(c);



// console.log(a);


// Select the second <p> element within the element with ID 'div'
let secpara = document.querySelectorAll("p")
// console.log(secpara);

secpara.forEach( (val, indx, arr)=>{
    // console.log(val.innerText);
    // console.log(indx);
    // console.log(arr);
    
    
})

let ob={
    num:"rohan sawant"
}

 arr = []


// ak ="dkdioeee0e00e00"

for (const key in ob.num) {
    arr.push(key)
    
}

// for (const element of ob.num) {
//     arr.push(element)
    
// }

// console.log(arr);




// let str = 
// {
//     dd :"ss",
//     ff: "gg"
// }


const str = new Map([
    ['a', 1],
    ['b', 2]
]);

for (const [key,val] of str) {
    // console.log(key,val);
    
}


// for (const key in str) {
//     console.log(key,str[key]);
    
// }



let from = 1;
let to = 5;

// Create an array with values from 1 to 5
let rangeArray = Array.from({ length: to - from + 1 }, (_,i) => i + from);

// console.log(rangeArray);



// let secondParagraph = secpara[0];

// // Step 3: Get the child nodes of the second <p> element
// let childNode = secondParagraph.childNodes;
// console.log(childNode);


// // Log the selected element to the console
// secpara.forEach((element) => {
//     console.log(element);
    
// })// Logs: <p>Lorem ipsum dolor sit amet. 4</p>



let list = document.querySelector(".list")

// console.log(list);
// console.log(list.children[2]);



let days = document.querySelector(".days")
// console.log(days.childNodes);


// let children = days.childNodes
// console.log(children);
// console.log(day);
// console.log(day);
// console.log(day.children[2]);



// for (let i = 0; i < days.children.length; i++) {
//         // console.log(days.children[i].innerText);
// }



// let dayone= document.querySelector('.day')
// console.log(dayone.parentElement);
// console.log(dayone.nextElementSibling);
// console.log(days.childNodes);






//****************************************************************************************************************************************************************


const div = document.createElement("div")
console.log(div);

div.id = "myid"
div.style.backgroundColor = "red"

// div.innerText = "newv hee"
const text = document.createTextNode("hello world")
console.log(text);

div.appendChild(text)
document.body.prepend(div)

//******************************** Inserting Before a Specific Element*********************************************

// const parent = document.getElementById('parentElement'); // Get the parent element
// const newDiv = document.createElement('div'); // Create a new div element
// newDiv.textContent = "This is a new div"; // Add content to the new div
// const referenceElement = document.getElementById('referenceElement'); // Get the reference element
// parent.insertBefore(newDiv, referenceElement); // Insert the new div before the reference element





//********************************  Inserting After a Specific Element *********************************************


// const referenceElement = document.getElementById('referenceElement'); // Get the reference element
// const newDiv = document.createElement('div'); // Create a new div element
// newDiv.textContent = "This is a new div"; // Add content to the new div

// // Insert the new div after the reference element
// referenceElement.parentNode.insertBefore(newDiv, referenceElement.nextSibling);




//******************************** Replacing an Existing Element *********************************************


// const parent = document.getElementById('parentElement'); // Get the parent element
// const newDiv = document.createElement('div'); // Create a new div element
// newDiv.textContent = "This is a new div"; // Add content to the new div
// const oldElement = document.getElementById('oldElement'); // Get the element to be replaced
// parent.replaceChild(newDiv, oldElement); // Replace the old element with the new div


//***************************************************************************************************************************************

// const parent = document.querySelector(".parent")
// const newdiv = document.createElement("div")
// newdiv.style.backgroundColor = "blue"
// const divs = document.createTextNode("New div text")
// // console.log(divs);
// newdiv.appendChild(divs)
// const reference = document.querySelector(".referenceElement")
// parent.insertBefore(newdiv,reference)






const reference = document.querySelector(".referenceElement")
console.log(reference);
const newdiv = document.createElement("div")
newdiv.style.backgroundColor = "red"
const divs = document.createTextNode("hello this new")
newdiv.appendChild(divs)
console.log(newdiv);

// reference.parentNode.insertBefore(newdiv, reference.nextSibling);
// reference.after(newdiv)






// const parent = document.querySelector('.parent'); // Get the parent element
// const newdiv = document.createElement('div'); // Create a new div element
// // newDiv.textContent = "This is a new div"; // Add content to the new div
// const newd = document.createTextNode("this is the njshsdsdj text")
// newdiv.appendChild(newd)
// const oldElement = document.querySelector('.oldElement'); // Get the element to be replaced
// // parent.replaceChild(newDiv, oldElement); // Replace the old element with the new div
// parent.replaceChild(newd,oldElement)




// traversing from child to parent
const child = document.querySelector(".referenceElement")
const pr = child.parentNode
console.log(pr);








