/** @format */

// navigation dropdown effect
let bars = document.querySelector("#bars");
let ul2 = document.querySelector("#ul2");
let book = document.querySelector(".book");
let book1 = document.querySelector(".book1");

let showNav = false;
book.style.display = "none";

function displayNav() {
  if (!showNav) {
    ul2.style.top = 141 + "px";
    ul2.style.opacity = 1;

    showNav = !showNav;
  } else {
    ul2.style.opacity = 0;
    ul2.style.top = -1000 + "px";

    showNav = !showNav;
  }
}

bars.addEventListener("click", displayNav);

//Book Appointment

let appPage = document.querySelector("#appoint");
let cancel = document.querySelector(".cancel");

book.addEventListener("click", () => {
  appPage.style.display = "flex";
});
book1.addEventListener("click", () => {
  appPage.style.display = "flex";
});

cancel.addEventListener("click", () => {
  console.log("cancel");
  appPage.style.display = "none";
});



