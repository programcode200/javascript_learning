document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header, index) => {
    console.log("index", index);

    console.log(header);

    header.addEventListener("click", () => {
      // Toggle active class on the clicked header
      header.classList.toggle("active");

      // Get the associated body and toggle its visibility
      const body = header.nextElementSibling;
      console.log("sibling", body);

      if (body.style.display === "block") {
        body.style.display = "none";
      } else {
        body.style.display = "block";
      }

      // Collapse other items
      headers.forEach((otherHeader, otherIndex) => {
        console.log("other", otherIndex);
        // console.log("otherheaderrrrr",otherHeader);
        console.log(index,"main");
        

        if (otherIndex !== index) {
          console.log(index, "indexxxxxxxxxxxxx");

          otherHeader.classList.remove("active");
          otherHeader.nextElementSibling.style.display = "none";
        }
      });
    });
  });
});
