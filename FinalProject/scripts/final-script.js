const URLM = "https://github.com/AustinCBYUi/cse121b/blob/main/scriptureSummary.json";
let scriptures = [];

const divGrid = document.getElementById("grid-entry")
const rightSideEle = document.getElementById("rightSide");


//Displays the books section in the json file.
const displayBooks = async (books) => {
    books.forEach(book => {
        var addGrid = document.createElement("div");
        addGrid.id = "grid-item-left";
        let button = document.createElement("button");
        button.innerHTML = book.book;
        let summarized = book.sum;
        
        //Making this was when I came to the conclusion that JS is actually incredible.
        button.addEventListener("click", () => {
            //Used the previous week to work out this reset() function.
            reset();
            let newGrid = document.createElement("div");
            newGrid.id = "grid-item-right";
            let para = document.createElement("p");
            para.innerHTML = summarized;
            newGrid.appendChild(para);
            divGrid.appendChild(newGrid);

            // alert(summarized);
        })

        addGrid.appendChild(button);

        divGrid.appendChild(addGrid);
    });
}



//Reset function to erase items.
//This throws an 'error' in the DOM because once it's called it removes the item, so it says
//it is null.
//Fixed the previous error by using the conditional.
async function reset() {
    let erase = await document.querySelector("#grid-item-right");
    if (erase == "#grid-item-right") {
        erase.remove();
    }
    else {
        console.log("Erased previous items.")
    }
    // erase.innerHTML = null;
}



let getList = async () => {
    let response = await fetch("https://raw.githubusercontent.com/AustinCBYUi/cse121b/main/scriptureSummary.json");
    const data = await response.json();
    scriptures = data;
    displayBooks(scriptures);
}

getList();