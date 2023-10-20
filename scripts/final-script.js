const URLM = "https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json";
let scriptures = [];

const divGrid = document.getElementById("grid-item")

const displayBooks = async (books) => {
    books.forEach(book => {
        var addGrid = document.createElement("div");
        addGrid.id = "grid-item";
        let h5 = document.createElement("h5");
        h5.innerHTML = book.book;

        addGrid.appendChild(h5);

        divGrid.appendChild(addGrid);
    });
}

let getList = async () => {
    let response = await fetch();
    const data = await response.json();
    scriptures = data;
    displayBooks(scriptures);
}

getList();