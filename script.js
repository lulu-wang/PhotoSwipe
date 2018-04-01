$(document).ready(function() {
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
        collection: []
      })
    }
  });

  $('.enterBtn').click(function (){

    firebase.auth().signInAnonymously().catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  });


  var horizontalScroll;
  console.log("whatup?");
  $(document).on('wheel', function(event) {
    console.log("whatup wheel?");
  });
});
