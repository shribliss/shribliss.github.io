function backToTop() {
  // Back to Top
  // hide #back-top first
  $("#back-top").hide();
  // fade in #back-top
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 1200);
      return false;
    });
  });

}
