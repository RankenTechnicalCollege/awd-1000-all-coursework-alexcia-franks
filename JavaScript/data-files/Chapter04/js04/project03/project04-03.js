"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Alexcia Franks
      Date:   11/17/2026

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
const wordCountBox = document.getElementById("countValue");
const warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   let commentText = document.getElementById("comment").value;
   let charCount = countCharacters(commentText);
   
   // Try, catch, finally statement
   try {
   // If the character count exceeds the maximum, throw an exception
      if (charCount > MAX_REVIEW)
         throw "You have exceeded the character count limit";
}
   // For any exception, display the warning message in the warning box
   catch (err) {
      warningBox.innerHTML = err;
   }

   // Whether the exception is thrown or not, display the character count in the word count box
   finally {
      wordCountBox.innerHTML = charCount;
   }
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 