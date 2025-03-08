const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(buttons);


buttons.forEach((btn) => {
  console.log("button",btn);

  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log("target",e.target);

    // if(e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id
    // }
    // else if(e.target.id === 'white'){
    //     body.style.backgroundColor = e.target.id
    // }
    // else if(e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id
    // }
    // else if(e.target.id === 'yellow'){
    //     body.style.backgroundColor = e.target.id
    // }


    

    // const key = e.target.id;

    // switch (key) {
    //   case "grey":
    //     body.style.backgroundColor = "grey";
    //     break;

    //   case "white":
    //     body.style.backgroundColor = "white";
    //     break;

    //   case "blue":
    //     body.style.backgroundColor = "blue";
    //     break;

    //   case "yellow":
    //     body.style.backgroundColor = "yellow";
    //     break;

    //   default:
    //     console.log("default val");
    //     break;
    // }

    const key = e.target.id;
    console.log("key",key);
    
    switch (key) {
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;

      default:
        console.log("default value");
        break;
    }
  });
});
