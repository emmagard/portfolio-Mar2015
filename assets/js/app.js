$(document).ready(function(){


  $('nav ul li a').on('click', function(event){
    event.preventDefault();

    var fullUrl         = this.href,
        seperatedUrl    = fullUrl.split('#'),
        targ            = seperatedUrl[1],
        targetOffsetTop = $('#'+ targ).offset().top;

    $('html, body').animate({ scrollTop: targetOffsetTop }, 1600, "swing");
  });

  var sections   = $('section'),
      nav        = $('nav'),
      nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    nav.addClass('scrolled');
  });

});
