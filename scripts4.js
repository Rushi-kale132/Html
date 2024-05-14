// Pause video when user scrolls
window.addEventListener('scroll', function() {
    var video = document.querySelector('video');
    video.pause();
  });
  
  // Play video when user hovers over it
  var video = document.querySelector('video');
  video.addEventListener('mouseover', function() {
    video.play();
  });
  