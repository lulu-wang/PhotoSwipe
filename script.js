var scroller;
var scrollPosition = 0;

$(document).ready(function() {
  scroller = $('.scroller');
  var items = ['http://pixelframe.nathanp.me/static/images/uploads/mushroom.png', 'http://pixelframe.nathanp.me/static/images/uploads/1-up.png'];
  for (var src of items) {
    scroller.append($('<img>', {
      src: src,
      width: '300px',
      height: '300px'
    }));
  }

  $('.loginBtn').click(function (){
    firebase.auth().signInAnonymously().catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  });

  $(document).on('wheel', function(event) {
    updateSlider(event.originalEvent.deltaX);
  });
});


function updateSlider(delta) {
  console.log('fdsa');
  scrollPosition += -delta;
  scroller.css('left', scrollPosition + 'px');
}
