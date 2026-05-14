$(document).ready(function () {
    $('.product-info').hover(function () {
            // over
            $('.product-info ul').slideToggle(300);    
        }, function () {
            // out
            $('.product-info ul').slideToggle(300);
        }
    );

    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').scrollTop(0);
    });

});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    autoplay: {
        delay: 2000,
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })