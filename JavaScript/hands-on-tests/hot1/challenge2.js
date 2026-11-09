"use strict"
/* 

    Author: Alexcia Franks
    Date: 11/9/2026

*/

document.getElementById("verify").addEventListener("click", verifyAge);

function verifyAge() {
    let age = document.getElementById("ageInput").value;
    let message = document.getElementById("message");

    // Check if the input is an integer
    if (isNaN(age)) {
        message.innerHTML = "Please enter your age!";
    }

    // Check if age is out of range
    else if (age < 1 || age > 200) {
        message.innerHTML = "Age out of range!";
    }

    // Check if age is 21 or older
    else if (age >= 21) {
        message.innerHTML = "Welcome to the Venue!";
    }

    // Check if age is under 21
    else {
        message.innerHTML = "You're not old enough!";
    }
}