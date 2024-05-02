const hamburger = document.querySelector("#open-btn");
const closeButton = document.querySelector("#close-btn");
const navBar = document.querySelector(".navbar-nav");

// navbar toggle function
const navbarToggle = () => navBar.classList.toggle("active");

hamburger.addEventListener("click",navbarToggle);
closeButton.addEventListener("click",navbarToggle);

