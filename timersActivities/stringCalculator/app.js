var test1 = "Add 2 and 4";
var test2 = "Subtract 3 from 10";
var test3 = "Multiply 8 and 2";
var test4 = "Divide 30 by 3";

function stringCalculator(string) {
    var splitString = string.toLowerCase().split(" ");

    if(splitString.length !== 4 || isNaN(parseInt(splitString[1])) || isNaN(parseInt(splitString[3]))) {
        console.log("Invalid request format. Try again.");
    }
    else {
        switch(splitString[0]) {
            case "add":
            return parseInt(splitString[1]) + parseInt(splitString[3]);
            break;

            case "subtract": 
            return splitString[1] - splitString[3];
            break;

            case "multiply":
            return splitString[1] * splitString[3];
            break;

            case "divide":
            return splitString[1] / splitString[3];
            break;

            default:
            console.log("Error! please make sure your spelling is correct and try again.");
            break;
        }
    }
};