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
//捲動到設定高度才會出現按鈕
  $(window).scroll(function() {
  // 此時的 $(this) 就會等同於 $(window)
  if ($(this).scrollTop() > 400) {
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});
