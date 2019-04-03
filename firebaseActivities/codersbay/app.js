var config = {
    apiKey: "AIzaSyATFsGIWA2U_Wn1IkVSg04VgxHrd7OxZVc",
    authDomain: "codersbay-96a14.firebaseapp.com",
    databaseURL: "https://codersbay-96a14.firebaseio.com",
    projectId: "codersbay-96a14",
    storageBucket: "codersbay-96a14.appspot.com",
    messagingSenderId: "660286313522"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var connectionsRef = database.ref('/connections');
var connectedRef = database.ref('.info/connected');

connectedRef.on('value', function(snap) {
    if(snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on('value', function(snap) {
    $('#connected-viewers').text(snap.numChildren());
});

//-------------------------------
//initial values

var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

//--------------------------------------
database.ref('/bidderData').on('value', function(snapshot) {
    if(snapshot.child('highBidder').exists() && snapshot.child('highPrice').exists()) {
        highBidder = snapshot.val().highBidder;
        highPrice = parseInt(snapshot.val().highPrice);

        $('#highest-bidder').text(snapshot.val().highBidder);
        $('#highest-price').text('$' + snapshot.val().highPrice);

        console.log(snapshot.val().highBidder);
        console.log(snapshot.val().highPrice);
    }
    else {
        $('#highest-bidder').text(highBidder);
        $('#highest-price').text('$' + highPrice);

        console.log("local high price");
        console.log(highBidder);
        console.log(highPrice);
    }
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

//--------------------------------------------------------------
//whenever a user clicks the click button

$('#submit-bid').on('click', function(event) {
    event.preventDefault();

    var bidderName = $('#bidder-name').val().trim();
    var bidderPrice = parseInt($('#bidder-price').val().trim());

    console.log(bidderName);
    console.log(bidderPrice);

    if(bidderPrice > highPrice) {
        alert("You are now the highest bidder!");
        database.ref('/bidderData').set({
            highBidder: bidderName,
            highPrice: bidderPrice
        });

        console.log("New High Price!");
        console.log(bidderName);
        console.log(bidderPrice);

        highBidder = bidderName;
        highPrice = parseInt(bidderPrice);

        $('#highest-bidder').text(bidderName);
        $('#highest-price').text('$' + bidderPrice);
    }
    else {
        alert("Sorry that bid is too low.  Please try again.");
    }
});