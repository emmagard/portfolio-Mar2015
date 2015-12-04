$(document).ready(function() {

  var sections   = $('section'),
      nav        = $('nav'),
      nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    nav.addClass('scrolled');
  });

  $('nav ul li a').on('click', function(event){
    var fullUrl         = this.href,
        seperatedUrl    = fullUrl.split('#'),
        targ            = seperatedUrl[1],
        targetOffsetTop = $('#'+ targ).offset().top;

    event.preventDefault();

    $('html, body').animate({ scrollTop: targetOffsetTop }, 1600, "swing");
  });
});
