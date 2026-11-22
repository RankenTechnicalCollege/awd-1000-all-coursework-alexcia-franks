"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Alexcia Franks
      Date:   11/18/2026

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

let timeID = ""  // Variable to hold the ID for the timed commands

// Elements in the quiz page
let startQuiz = document.getElementById("startQuiz");
startQuiz.onclick = function() {
   overlay.className = "hidequiz";
   timeID = setInterval(countdown, 1000);
};
// countdown function to update quiz clock
countdown = function() {
   if (quizTime === 0) {
      clearInterval(timeID);
   }
   let totalCorrect = checkAnswers();

   if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You answered all the questions correctly.");
   } else {
        if (totalCorrect < correctAnswers.length) {
      alert("You answered " + totalCorrect + " out of " + correctAnswers.length + " questions correctly.");
   }
   if (timeLeft !== 0) {
      timeLeft - 1;
   }
}
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = timeLeft;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
const questionList = document.querySelectorAll("div#quiz input");



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}