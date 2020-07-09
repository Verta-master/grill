//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--opened');
  $('.menu__list').slideToggle();
});

if (window.innerWidth < 1022) {
  $('.menu__down').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu__down--up');
  });
  
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
}
