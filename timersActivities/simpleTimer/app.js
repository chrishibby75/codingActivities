var audio = new Audio("audio/heavy.mp3");

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timesUp, 1000 * 15);

function fiveSeconds() {
    $('#time-left').append("<h2>About 10 seconds left!</h2>");
    console.log("Ten seconds left.");
}

function tenSeconds() {
    $('#time-left').append("<h2>About 5 seconds left!</h2>");
    console.log("Five seconds left.");
}

function timesUp() {
    console.log("done!");
    $('#time-left').append("<h2>Time is up!</h2>");
    console.log("Time's up.");


    audio.play();
}
