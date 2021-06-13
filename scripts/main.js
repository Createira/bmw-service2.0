//Burger 
/* Menu nav toggle */
$("#nav_toggle").on("click", function(event) {
      event.preventDefault();
  
      $("#nav").toggleClass("active");
}); 

//Scroll btn
let btn = document.querySelector('.btn__to-top')
function magic() {
  if (window.pageYOffset > 300) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
	window.scrollTo(0,0)
}

window.onscroll = magic