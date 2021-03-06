window.onload = function() {
    $('#start').on('click', stopwatch.start);
    $('#stop').on('click', stopwatch.stop);
    $('#reset').on('click', stopwatch.reset);
    $('#lap').on('click', stopwatch.recordLap);
};

var intervalId;
var clockRunning = false;

var stopwatch = {
    time: 0,
    lap: 1,
    reset: function() {
        stopwatch.time = 0;
        stopwatch.lap = 1;

        $('#display').text("00.00");
        $('#laps').text("")
    },
    start: function() {
        if(!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
    },

    recordLap: function() {
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#laps').append('<p>Lap' + stopwatch.lap + " : " + converted + '</p>');
        stopwatch.lap++;
    },

    count: function() {
        stopwatch.time++;
        var converted = stopwatch.timeConverter(stopwatch.time);
        console.log(converted);
        $('#display').text(converted);
    },

    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};