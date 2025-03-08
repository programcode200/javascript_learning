// for each loop


//callback function 

//A callback function in JavaScript is a function that you pass into another function as an argument, and it gets executed
//after the main function completes its task. It’s called "callback" because it is "called back" at a later time




const coding = ["java", "python", "c++", "javascript", "ruby"]


//call back

coding.forEach( function (item){                            //no need to give fn name
        // console.log(item);
} )



coding.forEach( (f)=> {
    // console.log(f);
})



function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)                 // dont give execution printMe() only reference printMe




coding.forEach( (item, index, array)=> {
        // console.log(item, index, array);
})


//output                    item = value, index = numbers, array = give complete Array 
/*
java 0 [ 'java', 'python', 'c++', 'javascript', 'ruby' ]
python 1 [ 'java', 'python', 'c++', 'javascript', 'ruby' ]
c++ 2 [ 'java', 'python', 'c++', 'javascript', 'ruby' ]
javascript 3 [ 'java', 'python', 'c++', 'javascript', 'ruby' ]
ruby 4 [ 'java', 'python', 'c++', 'javascript', 'ruby' ]
*/


coding.forEach( (item, index,array) =>{
    if(index === 3) {
        // console.log(array);
        // console.log(index);
        // console.log(item);
    } 

})



const mycoding = [
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "python",
        filename: "py"
    },
    {
        language: "c++",
        filename: "cpp"
    }
]

mycoding.forEach( (item)=> {
//    console.log(item.filename);
})



//for each loop never return value

// const data = mycoding.forEach( (item) => {
//     console.log(item);
//     return item                        //also give undefined
// })

// console.log(data);

//output :  undefined




//************************************************************ filter() **********************************************************



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter get condition if true give value

// const newnums = num.filter( (num) => {
//         // return num > 4
// })                  


const newnums = []

num.forEach( (no) => {
    if (no > 5) {
        newnums.push(no)
    }
} )

// console.log(newnums);




const books = [
    {
      bookName: "To Kill a Mockingbird",genre: "Fiction",edition: "1st",publish: 1960
    },
    {
      bookName: "1984",genre: "Dystopian",edition: "1st",publish: 1949
    },
    {
      bookName: "The Great Gatsby",genre: "Fiction",edition: "3st",publish: 1925
    },
    {
      bookName: "Brave New World",genre: "Dystopian",edition: "3st",publish: 1932
    },
    {
      bookName: "Moby-Dick",genre: "Adventure",edition: "3st",publish: 1851
    },
    {
      bookName: "War and Peace",genre: "Historical Fiction",edition: "2st",publish: 1869
    },
    {
      bookName: "Pride and Prejudice",genre: "Romance",edition: "2st",publish: 1813
    },
    {
      bookName: "The Catcher in the Rye", genre: "Fiction",edition: "1st",publish: 1951
    },
    {
      bookName: "Animal Farm", genre: "Dystopian",edition: "1st",publish: 1945
    },
    {
      bookName: "Lord of the Flies",genre: "Fiction",edition: "1st",publish: 1954
    }
  ];
  


// const userBooks = books.filter( (bk)=> bk.genre === "Fiction" )

// const userBooks = books.filter( (bk) => bk.publish > 1953)


// const userBooks = books.filter( (bk) => {
//                 //return bk.genre === "Fiction" && bk.edition === "3st"

//                 let b =  bk.genre === "Fiction" && bk.edition === "3st"
//                 return b
// })

const userBooks = books.map( (m) => m.publish < 1900)

// console.log(userBooks);



//************************************************************ map() **********************************************************



// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = mynums.map( (num) => num + 10 )

// console.log(newnum);






// const no = mynums.forEach( (item) => item + 10)

// console.log(no);



//************************************************************ map() and chainning **********************************************************


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// first map() store * 10 value and pass to 2nd map and that operation value pass to filter 

const newno = mynums.map( (no) => no * 10 ).map( (no) => (no + 10) - 1 ).filter( (no) => no > 20 )
// console.log(newno);




//************************************************************ Array reduce() **********************************************************



// initialvalue , accumulator it store initial value first then store acc + curr value , current value

// const total = mynums.reduce( function(acc , currval) {
//     console.log(` ${acc} ${currval}`);
//     return acc + currval 
// }, 0)

// console.log(total);

// const total = mynums.reduce( (acc, curr) => acc + curr, 10)

const str = ["hey", "jd", "dhak"]

// const total =str.reduce( (acc, curr) => acc + curr, 0 )
// console.log(total);

























