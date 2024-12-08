// Day - 08

// Activity 1: Template Literals

// Task 1
// Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let Person = {
  name: `Shubham`,
  Age: 22,
};

const msg = `The Person name is ${Person.name} and they are ${Person.Age} Years Old.`;

console.log(msg);

// Task 2
// Create a multi-line string using template literals and log it to the console.

let MultiLineString = `
MySelf Shubham, 
I am 22 Years Old
I am a Coder 
`;

console.log(MultiLineString);

// Activity 2: Destructuring

// Task 3
// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [1, 2, 3, 4, 5];

let [first, second] = arr;

console.log(first, second);

// Task 4
// Use object destructuring to extract the title and author from a book object and log them to the console.

let Book = {
  Title: "Summar Story",
  Author: "Shivgemini",
};

// In JavaScript, when destructuring an object, the names must match the keys in the object
let { Title, Author } = Book;

console.log(`Book Title -> ${Title}, Author -> ${Author}`);

// Activity 3: Spread and Rest Operators

// Task 5
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let NewArr = [...arr, 6, 7];

console.log(NewArr);

// Task 6
// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

let Sum = (...num) => {
  let s = 0;
  for (let I = 0; I < num.length; I++) {
    s += num[I];
  }
  return s;
};

let Sum_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = Sum(Sum_arr); // The Sum function is designed to accept a rest parameter (...num), which expects individual numbers, not an array.

let result = Sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(`Sum of first 10 Natural number is ${result}`);

// Activity 4: Default Parameters

// Task 7
// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function Multiply(num1, num2 = 1) {
  return num1 * num2;
}

console.log(Multiply(5, 6));
console.log(Multiply(5));

// Activity 5: Enhanced Object Literals

// Task 8
// Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// Object Literal Enhancement :- Object literal enhancement is used to group variables from the global scope and form them into javascript objects. It is the process of restructuring or putting back together.

let Library_name = `Sinhgad Central Library`;
let floor = 6;
let Books = [
  {
    title: "Do Epic Shit",
    Author: "Ankur Wariko",
  },
  {
    title: "Atomic Habits",
    Author: "James Clear",
  },
  {
    title: "Rich Dad Poor Dad",
    Author: "Robert T",
  },
];

//When using the for...in loop, the key represents the index of the array elements (e.g., 0, 1, 2), not the actual object in the array. hence key.title will not give us the name of the books
let CheckBook = (name) => {
  for (const key in Books) {
    // console.log(`Current Book Title -> ${Books[key].title}`);
    if (Books[key].title == name) {
      return `${name} book is present in the sinhgad central library`;
    }
  }
  return `${name} book is not present in the sinhgad central library`;
};

// console.log(CheckBook("Do Epic Shit"));

let Library = { Library_name, floor, Books, CheckBook };

console.log(Library);

// Task 9
// Create an object with computed property names based on variables and log the object to the console.

// Explanation :- create an object with computed property names. This means that the property names of the object are dynamically generated based on variables or expressions.

let Propert1 = "BookCount";
let Propert2 = "IsOpen";

let Library_Status = {
  [Propert1]: Books.length, // Computed property name for book count
  [Propert2]: true, // Computed property name for library status
  [floor > 5 ? "hasMultipleFloors" : "isSingleFloor"]: true, //// Dynamic property name based on condition
};

console.log(Library_Status);

/*

Achievement 🏆
By the end of these activities, you will:

- Understand and use template literals for string interpolation and multi-line strings.
- Apply destructuring to extract values from arrays and objects.
- Utilize spread and rest operators for array manipulation and function arguments.
- Define functions with default parameters.
- Create objects using enhanced object literals, including methods and computed property names.

*/
