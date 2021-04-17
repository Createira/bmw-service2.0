// Fixed Header
const header = document.querySelector('.header'); //Find out the element header 
const headerHeight = header.offsetHeight; //Find out the height of the element

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= headerHeight) {
		header.classList.add('header--fixed');
	} else {
		header.classList.remove('header--fixed');
	}
});

//Burger 
/* Menu nav toggle */
$("#nav_toggle").on("click", function(event) {
      event.preventDefault();
  
      $("#nav").toggleClass("active");
}); 