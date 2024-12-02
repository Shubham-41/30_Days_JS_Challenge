// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

let a = 15;
let b = 10;
let c = a + b;
console.log(`${a} + ${b} = ${c}`);

// Task 2: Write a program to subtract two numbers and log the result to the console.

c = a - b;
console.log(`${a} - ${b} = ${c}`);

// Task 3: Write a program to multiply two numbers and log the result to the console.

c = a * b;
console.log(`${a} * ${b} = ${c}`);

// Task 4: Write a program to divide two numbers and log the result to the console.

c = a / b;
console.log(`${a} / ${b} = ${c}`);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

c = a % b;
console.log(`${a} % ${b} = ${c}`);

// Activity 2: Assignment Operators

// Task 6: Use the + operator to add a number to a variable and log the result to the console.

let num = 8;
num = num + 8;
console.log(num);

// Task 7: Use the - operator to subtract a number from a variable and log the result to the console.

num = num - 5;
console.log(num);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

c = a > b;
console.log(`Comparison Using Greater Than Operator ${a} > ${b} = ${c}`);

c = a < b;
console.log(`Comparison Using Less Than Operator  ${a} < ${b} = ${c}`);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

c = a >= b;
console.log(
  `Comparison Using Greater Than or Equal to Operator ${a} >= ${b} = ${c}`
);

c = a <= b;
console.log(
  `Comparison Using Less Than or Equal to Operator  ${a} <= ${b} = ${c}`
);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

c = a == b;
console.log(`${a} == ${b} = ${c}`);

c = a === b;
console.log(`${a} === ${b} = ${c}`);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

if (a % 5 == 0 && b % 5 == 0) {
  console.log(`${a} and ${b} are divisible by 5`);
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let x = 5;

if (x >= 0 || x === 0) {
  console.log(`The number is positive or zero`);
} else {
  console.log(`The number is negative`);
}

// Task 13: Write a program that uses ! the operator to negate a condition and log the result to the console.

let isActive = false;

if (!isActive) {
  console.log("The Variable is false");
} else {
  console.log("The Variable is true");
}

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let check = 15;

let ans = 15 > 0 ? "Number is Positive" : "Number is Negative";
console.log(ans);

// Completed on 01-12-2024  By Shubham Lipane
