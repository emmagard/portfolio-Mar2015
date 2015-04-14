$(document).ready(function(){
  // image carousel in other projects section
  $('.single-item').slick();
  // nav bar menu click and scroll animation, click and add active class
  $('nav ul li a').on('click', function(event){
    event.preventDefault();

    var fullUrl = this.href;
    console.log(this.href);
    var separatedUrl = fullUrl.split('#');
    var targ = separatedUrl[1];
    var targetOffsetTop = $('#'+ targ).offset().top;

    // var a = $('nav ul').children().children();
    // a.removeClass('active');

    // $(this).addClass('active');
    // console.log(this);

    $('html, body').animate({
      scrollTop: targetOffsetTop
    }, 1500, "swing");
  });

  var sections = $('section');
  var nav = $('nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    // fade in nav bar opon initial window scroll
    nav.fadeIn("slow");

    var cur_pos = $(this).scrollTop();
    // scroll and add active class when changing sections
    sections.each(function() {
      var top = $(this).offset().top - nav_height;
      var bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
});
});
