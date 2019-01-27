$(document).ready(function() {

  $('#carouselExampleIndicators').carousel({
    pause: true,
    interval: false
  });
  // Things that need to happen after full load
  $('.se-pre-con').addClass('hide');
  $('.containerBox').removeClass('hide');
  $('#socialMediaModal').modal('show');
  $('.contact').click(function() {
    $("#containerload").load("html/contact.html");
    $('.se-pre-con').removeClass('hide');
  });
  $('.our_mission').click(function() {
    $("#containerload").load("html/our_mission.html");
    $('.se-pre-con').removeClass('hide');
  });
  $('.activity').click(function() {
    $("#containerload").load("html/activity.html");
    $('.se-pre-con').removeClass('hide');
  });
  // Back to Top
  backToTop();
  // popup in modal
  $(function () {
    $('.pop-button').popover({
      trigger: 'click',
      html:true
    }).click(function () {
      setTimeout(function () {
          $('.pop-button').popover('hide');
      }, 2000);// it will hide automatically after 2 millsecond
    });
  });

  $('.popover-header').click(function() {
    $('.pop-button').popover('hide');
  });
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
