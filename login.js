$(document).ready(funtion() {
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
});