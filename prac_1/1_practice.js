const revString = (str) => {
  let revStr = "";
  //   for (let st of str) {
  //     revStr = st + revStr;
  //   }

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr);
};

// revString("abcd");

function palin(str) {
  str = str.toLowerCase();
  let revStr = "";
  for (let st of str) {
    revStr = st + revStr;
  }

  console.log(revStr === str ? "true" : "false");
}

// palin("aman, a plan, a canal, Panama");

function flatten(arr) {
  arr = arr.flat(Infinity);
  console.log(arr);
}

// flatten([1,2,4,5,[4,5,6,7,[2,3,4,5],5,6,7,[1,2,3,[3,4,5,[3,4,5,6,7,8,[7,7]]]]]])

function ftt(arr) {
  let r = [];

  for (let a of arr) {
    console.log(a);
    console.log(Array.isArray(a));
    if (Array.isArray(a)) {
      r.push(...ftt(a));
    } else {
      r.push(a);
    }
  }

  return r
}

console.log(ftt([1, 2, 3, 4, [5, 6, 7, [8, 9, 0, [1, 2]]]]));

