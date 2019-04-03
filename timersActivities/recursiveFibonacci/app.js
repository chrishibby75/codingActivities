var fibonacci = function(n) {

    var answer = [];

    for (i = 1; i < n + 1; i++) {
        answer.push(recursive(i));
    }
    return answer;
};

var recursive = function(i) {
    if (i < 2) {
        return i;
    }
    else {
        return recursive(i - 1) + recursive(i - 2);
    }
};