$(document).ready(function(){
  var popup = $('.popup');
  var popupVideo = popup.find('video');
  $(".videos").find(".image-container").click(function(e){
    var videoElement = $(e.target).closest('.video');
    if (videoElement.hasClass('blocked')){
      return;
    }
    console.log(videoElement);
    var src = videoElement.data('src');
    popupVideo.empty();
    popupVideo.attr("src", src)
    $('.popup').addClass('active')
  });
  popup.click(function(e){
    if (e.target.nodeName == 'DIV') {
      $(e.target).find('video').each(function () { this.pause(); });
      popup.removeClass('active');
    }
  });
});
