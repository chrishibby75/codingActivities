var config = {
    apiKey: "AIzaSyDA1RV8GqSvzcgURG-QHv2yPKaJXRdTuNM",
    authDomain: "clickcounter-95308.firebaseapp.com",
    databaseURL: "https://clickcounter-95308.firebaseio.com",
    projectId: "clickcounter-95308",
    storageBucket: "clickcounter-95308.appspot.com",
    messagingSenderId: "873668125589"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var initialeValue = 100;

var clickCounter = initialeValue;

database.ref().on('value', function (snapshot) {
    console.log(snapshot.val());
    clickCounter = snapshot.val().clickCount;
    console.log(clickCounter);

    $('#click-value').text(snapshot.val().clickCount);
},  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

$('#click-button').on('click', function() {
    clickCounter--;
    if(clickCounter === 0) {
        alert("Phew! You made it! That sure was a lot of clicking.");
        clickCounter = initialeValue;
    }

    database.ref().set({
        clickCount: clickCounter
    });
    console.log(clickCounter);
});

$('#restart-button').on('click', function() {
    clickCounter = initialeValue;
    database.ref().set({
        clickCount: clickCounter
    });
    console.log(clickCounter);
    $('#click-value').text(clickCounter);
});