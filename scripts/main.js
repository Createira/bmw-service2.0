//Preloader
window.onload = function() {
   let preloader = document.getElementById('loader-wrapper');
   preloader.classList.add('hide-preloader');
   setInterval(function() {
         preloader.classList.add('preloader-hidden');
   }, 1700);
}

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