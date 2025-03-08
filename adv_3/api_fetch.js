//*****************************************************************************************************************************************************************
//fetch using async and await

// async function allusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         //Asynchronous Nature: Parsing large amounts of data can be time-consuming, and JavaScript handles such operations asynchronously
//         //to avoid blocking the main thread. This is especially important in web development, where blocking the main thread can freeze the UI.
//         //response.json take time to convert so thats why need to use await before it
//         const data = await response.json()    

//         console.log(data);
//         // console.log(response);
//     } catch (error) {
//         console.log("Error:", error);
//     }

// }
// allusers()


//*****************************************************************************************************************************************************************

// Define an async function

// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data; // This automatically returns a Promise with the resolved data
// }

// // Use .then() to handle the resolved value from the async function
// fetchData()
//     .then(data => {
//         console.log('Data:', data); // Handle the resolved data
//     })
//     .catch(error => {
//         console.log('Error:', error); // Handle any errors
//     });


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error)=> console.log("error",error));