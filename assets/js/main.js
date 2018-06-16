(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  $(".rotate").click(function(){
    $(this).toggleClass("down")  ; 
  })
  
  /*Page Loader active */
  $('#preloader').fadeOut();


      /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

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



  });      

}(jQuery));

