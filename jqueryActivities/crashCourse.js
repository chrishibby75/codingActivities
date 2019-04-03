// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable
var basicVariable = "name";




// 2. ARRAYS
// ==========================================================

// Create an array of five strings
arr = ["music", "food", "whiskey", "beer", "wine"];




// Create an array of five numbers
numArr = [44, 37, 5, 2, 7];




// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
for(i = 0; i < 5; i++) {
    var name = "bob";
    console.log("My name is " + name + " five times");
}



// Create a for loop that loops through your five string array
for (i = 0; i < arr.length; i++) {
    console.log("I love " + arr[i] + "!");
}




// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function numDivide(a, b) {
    console.log(a /b);
}
numDivide(81,9);



// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function numPrint() {
    for (i = 0; i < numArr.length; i++) {
        console.log(numArr[i]);
    }
}
numPrint();

function joinPrint() {
       x = numArr.join(", "); 
        console.log(x);
}
joinPrint();




// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object
me = {
    name: "Chris",
    wife: "Heather",
    kid1: "Kade",
    kid2: "Kieran",
    pets: {
        dog: "Oscar",
        cat: "Monster"
    },
    car: "Malibu"
};




// Console log any three of the properties in that object
console.log(me.pets.dog);
console.log(me.name);
console.log(me.car);



// Create an Array of 5 Objects
objArr = [me = {
    name: "Chris",
    age: 43,
    love: "whiskey"
},
wife = {
    name: "Heather",
    age: 37,
    love: "wine"
},
kid1 = {
    name: "Kade",
    age: 5,
    love: "planets"
},
kid2 = {
    name: "Kieran",
    age: 2,
    love: "dinosaurs"
},
dog = {
    name: "Oscar",
    age: 5,
    ageType: "dog years",
    love: "chew toys"
}];



// Console log 3 properties for every one of the five objects
console.log("I am " + objArr[0].name + " and I'm " + objArr[0].age + " years old. I love " + objArr[0].love + ".");
console.log("I am " + objArr[1].name + " and I'm " + objArr[1].age + " years old. I love " + objArr[1].love + ".");
console.log("I am " + objArr[2].name + " and I'm " + objArr[2].age + " years old. I love " + objArr[2].love + ".");
console.log("I am " + objArr[3].name + " and I'm " + objArr[3].age + " years old. I love " + objArr[3].love + ".");
console.log("I am " + objArr[4].name + " and I'm " + objArr[4].age + " years old in " + objArr[4].ageType + ". I love " + objArr[4].love + ".");



// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

// var poop = $('<button>');
// poop.addClass('poop-button');
// $('.poop-button').on('click', function() {
//     console.log("poop is gross");
// });


// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
