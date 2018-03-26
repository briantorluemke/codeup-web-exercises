"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var enterNumber = confirm("Would you like to enter a number?");
//
// function promptNumber(question) {
//     var userInput = prompt(question);
//     return parseFloat(userInput);
// }
//
// if (enterNumber) {
//         var number = promptNumber();
//         var evenNumber = number % 2 === 0;
//         if (evenNumber) {
//             alert("Your number is even.")
//         } else {
//             alert("Your number is odd.")
//         }
//         var plus100 = (number + 100);
//         parseInt(plus100);
//         alert ("Your number plus 100 would be " + plus100);
//         if (number > 0) {
//             alert("Your number is positive.")
//         } else {
//             alert ("Your number is negative.")
//         }
//
//
//
// } else {
//     alert("Fine then.")
// }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(x) {
    var colorBlue = (x === "blue");
    var colorRed = (x === "red");
    var colorCyan = (x === "cyan");
    console.log(x);
    if (colorBlue) {
        alert("Blue is the color of the sky.")
    } else if (colorRed) {
        alert("Strawberries are red")
    } else if (colorCyan) {
        alert("I don't know anything about cyan.")
    } else {
        alert ("Sorry, I don't know anything about that color (if it's even a color).")
    }

}



    analyzeColor(colors);




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


// console.log(randomColor);
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// function analyzeColor(x) {
//     var colorBlue = (x === "blue");
//     var colorRed = (x === "red");
//     var colorCyan = (x === "cyan");
//     alert("Your color is " + x);
//     switch(x) {
//         case "blue":
//             alert("Blue is the color of the sky.");
//             break;
//         case "red":
//             alert("Strawberries are red");
//             break;
//         case "cyan":
//             alert("I don't know anything about cyan.");
//             break;
//         default:
//             alert ("Sorry, I don't know anything about that color.");
//             break;
//     }
//
// }
//
// analyzeColor(randomColor);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// var x = prompt("What color would you like to test?");
// analyzeColor(x);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(y , z) {
    var totalPrice;
    switch (y) {
        case (0):
            totalPrice = z;
            break;
        case (1):
            totalPrice = z * 0.9;
            break;
        case (2):
            totalPrice = z * 0.75; //25%
            break;
        case (3):
            totalPrice = z * 0.65;
            break;
        case (4):
            totalPrice = z * 0.5;
            break;
        case (5):
            totalPrice = 0;
            break;
    }
    return totalPrice;
}


console.log(calculateTotal(2 , 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
console.log(calculateTotal(luckyNumber , 100));