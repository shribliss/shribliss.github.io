
// $( document ).ready(function() {
// var images = [
// "images/carousel/judo0.jpg",
// "images/carousel/judo1.jpg",
// "images/carousel/judo2.png",
// "images/carousel/judo3.jpg",
// "images/carousel/judo4.png",
// ];
// for(var i=0 ; i< images.length ; i++) {
//   $('<div class="item"><img src="'+images[i]+'" alt="images'+[i]+'" width="100%" height="100%"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
//   $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
// }
// $('.item').first().addClass('active');
// $('.carousel-indicators > li').first().addClass('active');
// $('#carousel-example-generic').carousel();
// $('#carouselExampleIndicators').carousel('pause');
// });
$(window).on("load", function() {
  // Things that need to happen after full load
  setTimeout(function(){
    $('.se-pre-con').addClass('hide');
    $('.containerBox').removeClass('hide');
  }, 2000);
  $('#carouselExampleIndicators').carousel({
  pause: true,
  interval: false
  });
  $('.contact').click(function() {
    $('html,body').animate({
      scrollTop: $("#contact").offset().top
    }, 1200);
  });
  $('.our_mission').click(function() {
    $('html,body').animate({
      scrollTop: $("#our_mission").offset().top
    }, 1200);
  });
  // Back to Top
  backToTop();
});

// $(window).load(function() {

// });
