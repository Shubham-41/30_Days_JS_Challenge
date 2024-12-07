// Objects

// Activity 1: Object Creation and Access

// Task 1
// Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "Do Epic Shit",
  Author: "Ankur Wariko",
  Year: 2023,
};

console.log(book);

// Task 2
// Access and log the title and author properties of the book object.

console.log(book.title); // Accessing title property of object book
console.log(book["Author"]); // Accessing Author property of object book

// Activity 2: Object Methods

// Task 3
// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getTitleAuthor = function () {
  return `Book_Title - ${this.title}, Book_Author - ${this.Author}`;
};

console.log(book.getTitleAuthor());

// Task 4
// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.update_year = function (year) {
  if (typeof year === "number") {
    this.Year = year;
  } else {
    console.log(`Invalid Year`);
  }
};

book.update_year(2024);

console.log(book);

// Activity 3: Nested Objects

// Task 5
// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
  name: "Sinhgad Library",
  books: [
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      year: 1937,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      year: 2018,
    },
    {
      title: "Summar Story",
      author: "Samar",
      year: 2019,
    },
  ],
};

console.log(library);

// Task 6
// Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);

Access_Title = library.books.reduce((acc, curr) => {
  if (curr.title) {
    acc.push(curr.title);
    // acc["title"] = curr.title; // Wrong
  }
  return acc;
}, []);

// const Access_Title = library.books.map((book) => book.title);

console.log(Access_Title);

// Activity 4: The this Keyword

// Task 7
// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.GetTitleYear = function () {
  return `Book_Title - ${this.title}, Book_Year - ${this.Year} `;
};

console.log(book.GetTitleYear());

// Activity 5: Object Iteration.

// Task 8
// Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const i in book) {
  if (book.hasOwnProperty(i)) {
    console.log(`${i} - ${book[i]}`);
  }
}

// Task 9
// Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));

// Completed on 07-12-2024  By Shubham Lipane

/*

Achievement 🏆

By the end of these activities, students will:

- Create and manipulate objects with properties and methods.
- Understand and use the this keyword in object methods.
- Work with nested objects and arrays of objects.
- Iterate over an object's properties using loops and built-in methods.

*/
