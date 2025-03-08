// // let name = document.getElementsByClassName("name"); //this will return value

// // console.log(name);



// console.log(document.querySelector("div").firstChild);
// /* 

// first child : firstChild
// Definition: The firstChild property returns the first child node of a specified element.
// Includes: This can be any type of node, including element nodes, text nodes (including whitespace), comment nodes, etc.
// console.log(document.body.firstChild);
// If there is a comment or text node (whitespace) before the <div>, firstChild will return that comment or text node.


// children : children
// Definition: The children property returns a live HTMLCollection of child elements of a specified element.
// Includes: Only element nodes (e.g., <div>, <p>, <span>, etc.). It does not include text nodes, comment nodes, or other non-element nodes.

// */
// console.log(document.querySelector("div").children);



// //innerText := return text content of element and all its children ,only text return
// //innerHTML := this return plain text and html content and element too ,return text and element too

// let div = document.querySelector(".intext");
// console.dir(div);

// //textContent := return text content even for hidden element


// let heading = document.querySelector("h2");
// // heading.append(" hello from javascript")    //add on end
// // heading.prepend(" hello from javascript ")    //add on start



// //access multiple divs by div[0] because of work as nodelist(array)

// let box = document.querySelectorAll(".box")
// // console.log(box[0]);
// // box[0].innerText = "unique1";
// // box[1].innerText = "unique2";

// let idx = 1
// for (const i of box) {
//     i.innerText =` div index is ${idx}`
//     idx++
// }



// //Attribute <div id="num"> </div>   (id, class) are attributes
// //this for get
// let attr = document.querySelector(".attr")
// // console.log(attr.getAttribute("class"));


// let id = attr.getAttribute("id")
// console.log(id);


// //this for set
// // (class , enter new className)
// console.log(attr.setAttribute("class","newattr"));


// /* structure of html in js DOM

// Document
// └── html (Element)
//     ├── head (Element)
//     │   ├── meta (Element)
//     │   └── title (Element)
//     │       └── "Example" (Text)
//     └── body (Element)
//         └── div (Element)
//             ├── " " (Text, whitespace)
//             ├── p (Element)
//             │   └── "Hello, World!" (Text)
//             ├── " " (Text, whitespace)
//             ├── img (Element)
//             ├── " " (Text, whitespace)
//             └── Comment: " This is a comment "

// */


// //****************************************** Insert Elements ************************************ 

// let el = document.createElement("div")



let el = document.createElement("div")
let el1 = document.createElement("button")
el.innerText = "new div"        //these 2 steps for create


//add into DOM tree
let newel = document.querySelector(".insert-prop");
newel.append(el)
// newel.prepend(el1)
newel.after(el1)


//add heading at top of body
let newheading = document.createElement("h1");
newheading.innerHTML = "<i> this js heading</i>"
document.querySelector("body").prepend(newheading)


// //for delete
// el.remove()






//*********************************************************************************************************************************************************************************************************************
//add button top of body

let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn)



//append or change css class name in js


let p = document.querySelector(".mypara");


console.log(p.getAttribute("class"));

p.setAttribute("class","newpara")
console.log(p.getAttribute("class"));



//adding multiple class use classlist

p.classList.add("mypara")

//for remove
// p.classList.remove("mypara")




















