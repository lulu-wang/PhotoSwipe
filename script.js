var scroller;
var scrollPosition = 0;
var threshold = 50;

$(document).ready(function() {
  scroller = $('.scroller');
  var items = ['http://pixelframe.nathanp.me/static/images/uploads/mushroom.png', 'http://pixelframe.nathanp.me/static/images/uploads/1-up.png'];
  for (var src of items) {
    var thing = $('<div>', {
      class: 'scroll-item',
      width: '300px',
      height: '400px'
    }).append($('<div>', {
      class: 'image'
    }).css('background-image', 'url(' + src + ')'));
    scroller.append(thing);
  }

  $(document).on('wheel', function(event) {
    updateSlider(event.originalEvent.deltaX);
  });
});


function updateSlider(delta) {
  console.log('fdsa');
  scrollPosition += -delta;
  scroller.css('left', scrollPosition + 'px');
}

function flickUp(delta) {
  if (delta > threshold) {
    
  }
}

function flickDown(delta) {
  if (delta > threshold) {

  }
}