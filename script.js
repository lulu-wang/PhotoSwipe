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

  var db = firebase.database();
  var uid;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      uid = user.uid;

      var personName = $('.enterNameField').val();
      db.ref('users/' + uid).set({
        name: personName,
        collection: ["cool-story-bro"]
      })
    }
  });

  $('.enterBtn').click(function (){
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
