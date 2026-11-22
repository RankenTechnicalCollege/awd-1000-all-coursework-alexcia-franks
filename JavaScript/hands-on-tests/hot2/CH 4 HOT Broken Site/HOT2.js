"use strict";
	  // function to add values of selected check boxes and display total
      function calcTotal() {
         
         var itemTotal = 0;
         var tax = 0.05; // Fix #1 changed tax rate to 5%
         var totalWithTax = 0;
         
         var items = document.getElementsByTagName("input"); // Fix #5 declared items variable to get all input elements
         var cells = document.getElementsByTagName("td");
         for (var i = 0; i < items.length; i++) { // Fix #2 changed loop to iterate through all input elements
            if (items[i].checked) {
               itemTotal += (items[i].value * 1);
            }
         }
         tax = itemTotal * 0.05; //  Fix #3 calculate tax at 5%;
         totalWithTax = itemTotal + tax; // Fix #4 calculate total with tax variable
         cells[1].innerHTML = (itemTotal / 100).toFixed(2);
         cells[3].innerHTML = (tax / 100).toFixed(2);
         cells[5].innerHTML = "$" + (totalWithTax / 100).toFixed(2);
    
         // Clear all checkbox selections after Calculate is clicked
        for (let i = 0; i < items.length; i++) {
            if (items[i].type === "checkbox") {
            items[i].checked = false;
   }
}
      }
      
      // add event listener to Submit button
      var submitButton = document.getElementById("sButton");
      submitButton.addEventListener("click", calcTotal); // Fix #6 changed event from "submit" to "click"

      
      // Create and Display the Current Date
      let currentDate = new Date();

      let dateDiv = document.createElement("div");
      dateDiv.textContent = "Current Date: " + currentDate.toDateString();
        document.body.appendChild(dateDiv);