
var navMenu = document.querySelector(".nav-menu"),
closeButton = document.querySelector(".close-btn"),
hamburgerButton = document.querySelector(".hamburger-btn");

hamburgerButton.addEventListener("click", function(){
	navMenu.classList.add("mobile-navbar");
})
closeButton.addEventListener("click", function(){
	navMenu.classList.remove("mobile-navbar");
})