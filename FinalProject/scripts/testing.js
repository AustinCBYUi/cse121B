/* This is from the ESModules github example here. */

// create an alert at the top of the page for 3 seconds
// requires the message to be displayed and the time in milliseconds.
export function alertMessage(message, duration = 3000) {
    const alert = document.createElement("p");
    alert.innerHTML = message;
    alert.setAttribute(
      "style",
      "background-color: blueviolet; border: 1px solid blue; position:absolute; top:0; left:0; right:0; padding: 1em; text-align: center; color: white;"
    );
    document.body.prepend(alert);
    setTimeout(function () {
      document.body.removeChild(alert);
    }, duration);
}

/* Start of my functions? */

export function newMessage(duration = 2000) {
  let alert = document.createElement("p");
  alert.innerHTML = "Created by Austin Campbell at BYUi";
  alert.setAttribute(
    "style",
    "background-color: rgb(45, 37, 48); border: 1px solid rgb(45, 37, 48); max-width: 250px; position: absolute; top: 250px; left: 805px; right: 0; padding: 2em; text-align: center; color: white;"
    );
    document.body.prepend(alert);
    setTimeout(function () {
      document.body.removeChild(alert);
    }, duration);
}