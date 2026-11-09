"use strict"
/* 

    Author: Alexcia Franks
    Date: 11/9/2026

*/

document.getElementById("checkBtn").addEventListener("click", checkNumber);

function checkNumber() {
    let num = document.getElementById("number").value;
    let message = document.getElementById("message");

    // Check if the input is an integer
    if (isNaN(num) || num ==="") {
        message.innerHTML = "Please enter a number, not a word";
    }

    // Check for 1
    else if (Number(1)===1) {
        message.innerHTML = "One is the loneliest number that you'll ever do.";
    }

    // Check for 2
    else if (Number(2)===2) {
        message.innerHTML = "Two can be as bad as one. It's the loneliest number since the number one.";
    }

    //Check for 3
    else if (Number(3)===3) {
        message.innerHTML = "There is no three.";
    }

    // Any other number
    else {
        message.innerHTML = "You didn't enter a valid number.";
    }
}