//Burger 
/* Menu nav toggle */
$("#nav_toggle").on("click", function(event) {
      event.preventDefault();
  
      $("#nav").toggleClass("active");
}); 

// Инициализая секции с которой работаем
let grid = new Isotope('.grid', {
      itemSelector: '.grid-item',
});
  
// Работаем с кнопками фильтров
let filterBtn = document.querySelectorAll('.filters-button .filter-btn');
for (let i = 0; i < filterBtn.length; i++) {
// Если кликнули по ссылке
filterBtn[i].onclick = function (click) {
       // Отменяем переход
      click.preventDefault();
      // Получаем значение дата-атрибута кнопки
      let filterData = event.target.getAttribute('data-filter');
      // Применяем фильтрацию элементов в Isotope
      grid.arrange({
            filter: filterData
      });
};
}