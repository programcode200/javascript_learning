// Number of rows for the pattern
// let rows = 5;
let stars = '';
// Outer loop for each row
for (let i = 1; i <= 5; i++) {
  // Inner loop for stars in each row
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '* ';
  }
  // Print the row of stars
  console.log(stars);
}


// // Number of rows for the triangle
// let rows = 5;

// // Outer loop for each row
// for (let i = 1; i <= rows; i++) {
//   // Initialize an empty string for each row
//   let stars = '';
  
//   // Inner loop to print spaces (for alignment)
//   for (let j = 1; j <= rows - i; j++) {
//     stars += ' ';
//   }

//   // Inner loop to print stars
//   for (let k = 1; k <= i; k++) {
//     stars += '* ';
//   }

//   // Print the row of stars (with spaces)
//   console.log(stars);
// }
