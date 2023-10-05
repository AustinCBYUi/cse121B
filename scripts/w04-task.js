/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Austin Campbell",
    photo: "images/MyWedding.jpg",
    favoriteFoods: ["Subway", "Baked Chicken Tacos"],
    hobbies: ["Making Game mods", "3D Modeling", "Gym-going", "Hiking", "Staying busy!"],
    placesLived: [],

}



/* Populate Profile Object with placesLive objects */
//THIS IS NOT A STATIC KEY, YOU CANNOT ACCESS IT WITH DOT NOTATION.
//The .push() method is called once javascript is ran; therefore, these new objects
//are pushed to the object AFTER runtime. Not only would using dotnotation be
//non-beneficial from a big-O standpoint, but it also provides a undefined. Dot notation is
//bad form 9/10 times accessing nested objects. Rarely would I ever use it.
myProfile.placesLived.push(
    {
        place: "Phoenix, AZ",
        length: "21 years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const imageSelector = document.querySelector("#photo");
imageSelector.setAttribute("src", myProfile.photo);
imageSelector.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */
//Disregard all the misleading information people posted,
//you are unable to access dynamic keys. Use brackets.
//If you're really worried about someone being able to read your code
//document it better, it's not hard to put it like ths vvv
let dt = document.createElement("dt");
//Accesses a new object that is pushed into the myProfile(obj).placesLived(array),
//it is accessed as [0] in the array because it is an object itself.
dt.innerHTML = myProfile.placesLived[0].place;
let dd = document.createElement("dd");
dd.innerHTML = myProfile.placesLived[0].length;
document.querySelector("#places-lived").appendChild(dt);
document.querySelector("#places-lived").appendChild(dd);

