$(document).ready(function () {
  lazy();
});
//загрузка видео после загрузки всей страницы
window.addEventListener('load', 
    function() { 
      backgroundVideo();
  }, false);

$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

var innerWidth = $('body').innerWidth(),
videoLoaded;

//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    threshold: '',
    effect: 'fadeIn',
    effectTime: '300'
  });
}
//bg
function backgroundVideo() {
    $('.jquery-background-video-wrapper').append('<video class="my-background-video jquery-background-video" loop autoplay muted playsinline><source class="video-source" src="videos/optimazed.mp4" type="video/mp4"><source class="video-source" src="videos/optimazed.webm" type="video/webm"></video>');
    $('.my-background-video').bgVideo ({
      fullScreen : false, 
      fadeIn : 500,
      fadeOnPause : false,
      fadeOnEnd : true,
      showPausePlay: false
    });
    videoLoaded = true;
}
