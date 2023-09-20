/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Austin Campbell";
let currentYear = 2023;
let profilePicture = "images/MyWedding.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const imageElement = document.getElementById("image");



/* Step 4 - Adding Content */

nameElement.innerHTML(`<strong>${fullName}</strong>`);
yearElement.textContent = "2023";
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Picture of ${fullName}`);




/* Step 5 - Array */






