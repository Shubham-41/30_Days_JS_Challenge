// Activity 1: Selecting and Manipulating Elements

// Task 1
// Select an HTML element by its ID and change its text content.

let change_text_content = document.getElementById("main-title");

change_text_content.textContent = "Welcome to DOM Manipulation with Chai-Code";

// Task 2
// Select an HTML element by its class and change its background color.

// document.getElementsByClassName("description"): This method returns a collection of elements with the class description. You need to access an element from this collection using an index, such as elements[0].
let change_bgc = document.getElementsByClassName("description");

change_bgc[0].style.backgroundColor = "Yellow";

// let change_bgc = document.querySelector(".description");

// change_bgc.style.backgroundColor = "Yellow";

// Activity 2: Creating and Appending Elements

// Task 3
// Create a new div element with some text content and append it to the body.

let new_div = document.createElement("div");

let new_content = document.createTextNode(
  " Create a new div element with some text content"
);

new_div.classList.add("new-div");

new_div.appendChild(new_content);

// Get the button element
let add_new_div = document.getElementById("action-button");

// Ensure the parent of the button is targeted
let parentElement = add_new_div.parentNode;

// Insert the new div before the button
parentElement.insertBefore(new_div, add_new_div);

// Task 4
// Create a new li element and add it to an existing ul list.

let append_li = document.getElementById("task-list");

let li_item = document.createElement("li");

li_item.textContent = "Revise DOM Manipulation";

append_li.appendChild(li_item);

// Activity 3: Removing Elements

// Task 5
// Select an HTML element and remove it from the DOM.

let secondChild = document.querySelector("#task-list li:nth-child(2)"); // removing the second child of list

secondChild.remove();

// Task 6
// Remove the last child of a specific HTML element.

let Last_Child = document.querySelector("#task-list li:last-child");

Last_Child.remove();

// Activity 4: Modifying Attributes and Classes

// Task 7
// Select an HTML element and change one of its attributes (e.g., src of an img tag).

let Change_srs = document.querySelector(".change-srs");

Change_srs.src =
  "https://austingil.com/wp-content/uploads/JavaScript-Blog-Cover.png";

Change_srs.style.width = "200px";
Change_srs.style.margin = "0 auto";

// Task 8
// Add and remove a CSS class to/from an HTML element.

Change_srs.classList.add("img"); // adding a css class to img element

Change_srs.classList.remove("change-srs");

// Activity 5: Event Handling

// Task 9
// Add a click event listener to a button that changes the text content of a paragraph.

let paragraph_text = document.querySelector(".change-event-click");

// console.log(paragraph_text.textContent);

document.getElementById("action-button").addEventListener("click", function () {
  paragraph_text.textContent = "Text Content is Changed";
});

// Task 10
// Add a mouseover event listener to an element that changes its border color.

document
  .getElementById("footer-text")
  .addEventListener("mouseover", function () {
    document.getElementById("footer-text").style.borderColor = "red";
  });

/*

Achievement 🏆
By the end of these activities, you will:

- Select and manipulate DOM elements using JavaScript.

- Create and append new elements to the DOM.

- Remove elements from the DOM.

- Modify attributes and classes of HTML elements.

- Add and handle events to make web pages interactive.

*/

// Completed on 09-12-2024  By Shubham Lipane
