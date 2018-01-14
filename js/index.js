$(document).ready(function() {
  $('#carouselExampleIndicators').carousel({
    pause: true,
    interval: false
  });
});
$(window).on("load", function() {
  // Things that need to happen after full load
  $('.se-pre-con').addClass('hide');
  $('.containerBox').removeClass('hide');
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
  $('.activity').click(function() {
    $('html,body').animate({
      scrollTop: $("#activity").offset().top
    }, 1200);
  });
  // Back to Top
  backToTop();
});

document.addEventListener("DOMContentLoaded",
  function() {
    var div, n,
      v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", v[n].dataset.id);
      div.innerHTML = labnolThumb(v[n].dataset.id);
      div.onclick = labnolIframe;
      v[n].appendChild(div);
    }
  });

function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?rel=0&autoplay=1&mute=1;showinfo=0";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}
