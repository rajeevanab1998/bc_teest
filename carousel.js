// HERO
$('.carousel-1').owlCarousel({
   loop: true,
   margin: 20,
   nav: false,
   dots: false,
   autoplay: false,
   autoplayTimeout: 5000,
   autoplaySpeed: 1200,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
})

// Service Card
$('.carousel-2').owlCarousel({
   loop: true,
   margin: 20,
   nav: true,
   navText : ["<i class='fal fa-chevron-circle-left'></i>","<i class='fal fa-chevron-circle-right'></i>"],
   dots: false,
   autoplay: true,
   autoplayTimeout: 5000,
   autoplaySpeed: 1200,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 2
      },
      1000: {
         items: 3
      }
   }
})

// Details page Gallery
$('.carousel-3').owlCarousel({
   loop: true,
   margin: 0,
   nav: false,
   dots: false,
   autoplay: true,
   autoplayTimeout: 5000,
   autoplaySpeed: 1200,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      1000: {
         items: 1
      }
   }
})