var scroller;
var scrollPosition = 0;
var threshold = 50;

$(document).ready(function() {
  scroller = $('.scroller');
  var items = {image1: 'http://pixelframe.nathanp.me/static/images/uploads/mushroom.png', image2: 'http://pixelframe.nathanp.me/static/images/uploads/1-up.png'};
  for (var id of Object.keys(items)) {
    var thing = $('<div>', {
      class: 'scroll-item',
      width: '300px',
      height: '400px'
    }).append($('<div>', {
      class: 'image'
    }).css('background-image', 'url(' + items[id] + ')'));
    scroller.append(thing);
  }

  $(document).on('wheel', function(event) {
    updateSlider(event.originalEvent.deltaX);
  });
});


function updateSlider(delta) {
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