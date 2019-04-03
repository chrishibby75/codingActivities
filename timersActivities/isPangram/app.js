var test1 = "The quick brown fox jumps over the lazy dog.";
var isPangram = function(string) {
    if(string.length < 26) {
        return false;
    }
    else {
        var letterHolder = [];

        var letters = string.toLowerCase().replace(/[^a-z] +/g, "").split("");

        for (i = 0; i < letters.length; i++) {
            if (letterHolder.indexOf(letters[i]) === -1) {
                letterHolder.push(letters[i]);
            }
        }

        if (letterHolder.length === 26) {
            return true;
        }
        else {
            return false;   
        }
    }
};

isPangram(test1);