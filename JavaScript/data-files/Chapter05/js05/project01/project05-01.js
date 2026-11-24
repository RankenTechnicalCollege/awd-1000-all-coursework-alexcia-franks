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
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
const startQuiz = document.getElementById("startquiz");
const quizClock = document.getElementById("quizclock");
const overlay = document.getElementById("overlay");
const questionList = document.querySelectorAll("div#quiz input");
let timeLeft = quizTime;
let timeID;

// Initialize the quiz time
quizClock.value = timeLeft;

startQuiz.addEventListener("click", function() {
   clearInterval(timeID);
   timeLeft = quizTime;
   quizClock.value = timeLeft;
   questionList.forEach(function(question) {
      question.value = "";
      question.className = "";
   });
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000);
});

function countdown() {
   timeLeft--;
   quizClock.value = timeLeft;

   if (timeLeft === 0) {
      clearInterval(timeID);
      const totalCorrect = checkAnswers();

      if (totalCorrect === correctAnswers.length) {
         alert("Congratulations! You answered all the questions correctly.");
      } else {
         alert("You answered " + totalCorrect + " out of " + correctAnswers.length + " questions correctly.");
      }
   }
}

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