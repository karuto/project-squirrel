$(document).ready(function(){
  $('.showcase').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.photo-slides'
  });

  $('.photo-slides').slick({
    centerMode: true,
    slidesToShow: 5,
    focusOnSelect: true,
    asNavFor: '.showcase'
  });
});


// Place any jQuery/helper plugins in here.
