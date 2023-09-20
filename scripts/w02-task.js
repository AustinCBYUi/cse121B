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
const idk = document.querySelector("#home");
const imageElement = document.querySelector("#home picture img")



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = "2023";
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Picture of ${fullName}`);




/* Step 5 - Array */
//Thank you Martin!
let favoriteFood = [
    "Pizza",
    "Baked Chicken Tacos",
    "Jimmy Johns"
];


let singleFavoriteFood = "Homemade Waffles";
favoriteFood.push(singleFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFood}`;
//remove first item
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
//remove last item
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;





