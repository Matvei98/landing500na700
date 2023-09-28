let burgerElem = document.querySelector(".header-burger")
let menuElem = document.querySelector(".header-menu")
burgerElem.addEventListener("click", function(){
	burgerElem.classList.toggle("active")
	menuElem.classList.toggle("active")
	document.body.classList.toggle("lock")
})