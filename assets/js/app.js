$(document).ready(function(){
  $('#reveal-arrow1').on('click',function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#first-section').offset().top
    }, 1200);
  });
  $('#reveal-arrow2').on('click',function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#second-section').offset().top
    }, 1200);
  });
});
