var scroller;
var scrollPosition;

$(document).ready(function() {
  scroller = $('.scroller');
  var items = ['http://lorempixel.com/1000/1000/', 'http://lorempixel.com/1000/1000/'];
  for (var src of items) {
    scroller.append($('<img>', {
      src: src
    }));
  }
  $(document).on('wheel', function(event) {
    updateSlider(event.originalEvent.deltaX);
  });
});



function updateSlider(delta) {
  scrollPosition += delta;
  scroller.css('transform', 'translateX(-' + scrollPosition + 'px)');
}