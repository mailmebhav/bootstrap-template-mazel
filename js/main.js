$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $('header').css('background-color','rgba(51, 51, 51, 0.90)');
  } else {
    $('header').css('background-color','transparent');
  }
});
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
