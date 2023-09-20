//Create a new paragraph.
const newParagraph = document.createElement("p");

//Ooooh, changes the new paragraph element text to added w/ js then
newParagraph.innerText = "Added with JavaScript!";
//adds paragraph to the document!
document.body.appendChild(newParagraph);

//Create new image
const newImage = document.createElement("img");

//Add image
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "This is a picture of something but I'm not too sure!")
//Add to document
document.body.appendChild(newImage);


// //new section
// const newSection = document.createElement("section");

// newSection.innerHTML = "<h2>CSE 121B</h2><p>Welcome to JavaScript!</p>";
// document.body.appendChild(newSection);

const section = document.createElement("section");
const h3 = document.createElement("h3");
h3.textContent = "Relief Society";

section.appendChild(h3);
document.body.appendChild(section);
