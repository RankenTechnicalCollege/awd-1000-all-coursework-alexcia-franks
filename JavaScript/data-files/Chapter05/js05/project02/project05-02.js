"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Alexcia Franks
      Date:  11/22/2026 

      Filename: project05-02.js
*/

// Declare variables
let images = document.querySelectorAll("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

// Loop through each image
for (let i = 0; i < images.length; i++) {
   // Add a click event listener to each image
   images[i].addEventListener("click", function() {
      if (this.parentNode.id === "photo_bucket") {
         let newItem = document.createElement("li");
         newItem.appendChild(this);
         photoList.appendChild(newItem);
      }
      else {
         let oldItem = this.parentNode;
         photoBucket.appendChild(this);
         oldItem.parentNode.removeChild(oldItem);
      }
   });
}