// Events

// Activity 1: Basic Event Handling
// Task 1:
// Add a click event listener to a button that changes the text content of a paragraph.

let change_txt = document.getElementById("text-paragraph");

document
  .getElementById("change-text-btn")
  .addEventListener("click", function () {
    change_txt.textContent = "Text is changed";
  });

// Task 2:
// Add a double-click event listener to an image that toggles its visibility.

let img = document.getElementById("toggle-image");

img.addEventListener("dblclick", function () {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});

// Activity 2: Mouse Events

// Task 3:
// Add a mouseover event listener to an element that changes its background color.

document
  .getElementById("mouseover-div")
  .addEventListener("mouseover", function () {
    document.getElementById("mouseover-div").style.backgroundColor = "Red";
  });

// Task 4:
// Add a mouseout event listener to an element that resets its background color.

document
  .getElementById("mouseout-div")
  .addEventListener("mouseout", function () {
    document.getElementById("mouseout-div").style.backgroundColor =
      "transparent"; // reset to default
  });

// Activity 3: Keyboard Events

// Task 5:
// Add a keydown event listener to an input field that logs the key pressed to the console.

let key_input = document.getElementById("key-input");

key_input.addEventListener("keydown", function (event) {
  console.log(`Key Pressed :- ${event.key}`);
});

// Task 6:
// Add a keyup event listener to an input field that displays the current value in a paragraph.

let curr_txt = document.getElementById("current-value");
key_input.addEventListener("keyup", function (event) {
  event.preventDefault(); // Prevent default behavior (optional here)
  curr_txt.textContent = "Current Value: " + key_input.value; // Set paragraph text to input value
});

// Activity 4: Form Events

// Task 7:
// Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form = document.getElementById("user-form"); // Fetch the form element

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Create a Formdata object to get form data
  let formData = new FormData(form);

  // Log each key-value pair from the form

  for (let [key, value] of formData.entries()) {
    console.log(`${key} : ${value}`);
  }
});

// Task 8:
// Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let dropdown = document.getElementById("dropdown");
let selected_Val = document.getElementById("selected-value");

dropdown.addEventListener("change", function () {
  selected_Val.textContent = "Current Value: " + dropdown.value;
});

// Activity 5: Event Delegation

// Task 9:
// Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let list = document.getElementById("dynamic-list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked on:", event.target.textContent);
  }
});

// Task 10:
// Add an event listener to a parent element that listens for events from dynamically added child elements.

let li_item = document.getElementById("dynamic-list"); // Parent element
let add_li_btn = document.getElementById("add-item-btn"); // Button to add new list items

// Event listener for the button to add new list items
add_li_btn.addEventListener("click", function () {
  let item = document.createElement("li"); // Create new <li>
  item.textContent = "New-Item"; // Set its content
  li_item.appendChild(item); // Append it to the list
});

// Event delegation: listen for clicks on dynamically added <li> elements
li_item.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    // Check if the clicked target is an <li>
    console.log("Clicked on:", event.target.textContent);
  }
});

/*

Achievement 🏆
By the end of these activities, you will:

- Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.

- Understand and handle form events.

- Implement event delegation to manage events on dynamically added elements.

- Make web pages interactive by responding to various user actions.

*/

// Completed on 10-12-2024  By Shubham Lipane
