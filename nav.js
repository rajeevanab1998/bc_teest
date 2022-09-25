var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


// mobile click close menu

$(".list-item").click(function () {
    $(".overlay").removeClass("menu-open");
    $("nav").removeClass("menu-open");
    $(".menu-toggle i").removeClass("fa-times");
    $(".menu-toggle i").addClass("fa-bars");
});



// Scroll to top
$(document).ready(function () {

   // if the window is top if not then display button
   
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
      } else {
      $('.scrollToTop').fadeOut();
      }
   });
   
   // scroll to top
   
   $('.scrollToTop').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
   });

});

