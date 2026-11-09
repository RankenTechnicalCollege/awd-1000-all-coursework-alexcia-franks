/*
    Student Name: Alexcia Franks
    File Name: HOT Challenge 1
    Date:11/8/2026
*/


// Array with my 3 favorite movies
let favoriteMovies=["BabyBoy", "Coraline", "Harry Potter"];

// Add click event to the button
document.getElementById("addMovie").addEventListener("click", function () {

    // Get the movie entered by the user
    let userMovie = document.getElementById("movieInput").value;

    // Add the movie to the array
    favoriteMovies.push(userMovie);

    // Variable to store output
    let output = "";

    // For loop to display the movies
    for (let i = 0; i < favoriteMovies.length; i++) {
        output += favoriteMovies[i] + "<br>";
    }

    // Display movies on the page
    document.getElementById("movieList").innerHTML = output;
});
    


