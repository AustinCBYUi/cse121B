const URLM = "https://github.com/AustinCBYUi/cse121b/blob/main/scriptureSummary.json";
let scriptures = [];

const divGrid = document.getElementById("grid-entry")
const rightSideEle = document.getElementById("rightSide");

const displayBooks = async (books) => {
    books.forEach(book => {
        var addGrid = document.createElement("div");
        addGrid.id = "grid-item-left";
        let button = document.createElement("button");
        button.innerHTML = book.book;
        let summarized = book.sum;
        
        button.addEventListener("click", () => {
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



async function reset() {
    let erase = await document.querySelector("#grid-item-right");
    erase.remove();
    // erase.innerHTML = null;
}



let getList = async () => {
    let response = await fetch("https://raw.githubusercontent.com/AustinCBYUi/cse121b/main/scriptureSummary.json");
    const data = await response.json();
    scriptures = data;
    displayBooks(scriptures);
}

getList();