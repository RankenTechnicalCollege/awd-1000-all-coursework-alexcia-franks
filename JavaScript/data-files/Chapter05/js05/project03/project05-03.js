"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Alexcia Franks
      Date:   11/22/2026

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");

let headingCount = 1;
const heading = "H2";

// Create a for loop going from the first child of the sourceDoc through the last child
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
   // commands applied to each child element of sourceDoc
 if (n.nodeName === heading) {
      // Create a new list item element
      let anchor = document.createElement("a");
      anchor.setAttribute("name", "doclink" + headingCount)
      sourceDoc.insertBefore(anchor, n);
      // Create a new list item element
      let listItem = document.createElement("li");
      // Create a new anchor element
      let link = document.createElement("a");
      link.setAttribute("href", "#doclink" + headingCount);
      link.textContent = n.textContent;
      // Append the anchor element to the list item
      listItem.appendChild(link);
      // Append the list item to the table of contents
      toc.appendChild(listItem);
      headingCount++;
   }
}