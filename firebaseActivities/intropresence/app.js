var config = {
    apiKey: "AIzaSyAiIX-uYYewEv3z-aGbORyLfhIj2azZ9oE",
    authDomain: "intropresence-629a8.firebaseapp.com",
    databaseURL: "https://intropresence-629a8.firebaseio.com",
    projectId: "intropresence-629a8",
    storageBucket: "intropresence-629a8.appspot.com",
    messagingSenderId: "86319489973"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  var connectionsRef = database.ref('/connections');
  var connectedRef = database.ref('.info/connected');

  connectedRef.on('value', function(snap) {
      if(snap.val()) {
          var con = connectionsRef.push(true);
          con.onDisconnect().remove();
      }
  });

  connectionsRef.on('value', function(snap) {
      $('#watchers').text(snap.numChildren());
  });

  var initialValue = 100;
  var clickCounter = initialValue;

  database.ref('/clicks').on('value', function(snapshot) {
      console.log(snapshot.val());

      clickCounter = snapshot.val().clickCount;
      console.log(clickCounter);

      $('#click-value').text(snapshot.val().clickCount);
      $('#click-value').text(clickCounter);
  }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
  });

  //Whenever a user clicks the click button
    $('#click-button').on('click', function(event) {
        clickCounter--;
        if(clickCounter === 0) {
            alert("Phew! You made it. That was a lot of clicking.");
            clickCounter = initialValue;
        }

        database.ref('/clicks').set({
            clickCount: clickCounter
        });
        console.log(clickCounter);
    });

    $('#restart-button').on('click', function() {
        clickCounter = initialValue;
        database.ref('/clicks').set({
            clickCount: clickCounter
        });
        console.log(clickCounter);

        $('#click-value').text(clickCounter);
    });