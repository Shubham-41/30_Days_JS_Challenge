
// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console. Task 2: Declare a variable using `let, assign it a string, and log the value to the console.

var variable = 15 ;
console.log(variable);

let Str = "Shubham" ;
console.log(Str);


// Activity 2: Constant Declaration

// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.

const constant = true ;
console.log(constant);

// Activity 3: Data Types

// Task 4: Create variable of different data types (number, string, boolean, object, array) and log each variable's type using the tyreof operator.

let num = 43 ;

let String_ = "30 Days JS Challage";

let bool = true ;

let object = {
    name : "Shubham" ,
    Roll_no : 43
};

let array = [2,4,6,"Shubham", "Lipane"];

console.log(typeof num);
console.log(typeof String_);
console.log(typeof bool);
console.log(typeof object);
console.log(typeof array);


// Activity 4: Reassigning variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let val = 5 ;
console.log(val);
val = 10 ;
console.log(val);


// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const a = 25;
console.log(a);
a = 30 ;            // Error :-- TypeError: Assignment to constant variable.
// console.log(a); 
