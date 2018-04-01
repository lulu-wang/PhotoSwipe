$('.logoutBtn').click(function (){
  firebase.auth().signOut().then(function() {
    //sign out successful
    window.location.href="/"
  }, function (error) {
    //unsuccessful
  }) ;

});