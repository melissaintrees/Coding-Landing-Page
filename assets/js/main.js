(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /* Changing the chevron from open to close */
    $('#accordion').on('shown.bs.collapse', function (e) {
      $(e.target)
        .data("bs.collapse")
        .$trigger.attr("src", "https://via.placeholder.com/350x150");
    });

    $('#accordion').on('hidden.bs.collapse', function (e, f) {
      console.log($(e.target).data('bs.collapse').$trigger);
      //$(this).find(".panel-icon").attr('src', 'https://s22.postimg.org/9takvqkal/Mathematic_Plus2.png');
      $(e.target)
        .data("bs.collapse")
        .$trigger.attr("src", "../img/about.jpg");
    });



  /*Page Loader active */
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });


      /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

     /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        center: true,
        margin: 15,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }
      });  

     /*  Slick Slider
    ========================================================*/
    $('.slider-center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      /* Map Form Toggle
      ========================================================*/
      $('.map-icon').on('click',function (e) {
          $('#conatiner-map').toggleClass('panel-show');
          e.preventDefault();
      });

  });      

}(jQuery));

