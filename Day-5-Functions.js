// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function CheckEvenOdd(num) {
  let result = num % 2 == 0 ? "Even" : "Odd";

  console.log(`${num} is a ${result} number`);
}

CheckEvenOdd(6);

// Task 2: Write a function to calculate the square of a number and return the result.

function SquareNum(num) {
  let result = num * num;
  return result;
}

console.log(`Square of a number ${5} is ${SquareNum(5)}`);

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function MaxNum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1 > num2 ? num1 : num2;

    console.log(`Maximum between ${num1} and ${num2} is ${result}`);
  } else {
    console.log(`Please Enter Numbers`);
  }
}

MaxNum(4, 6);
MaxNum(2, "3");

// Task 4: Write a function expression to concatenate two strings and return the result.

function ConcatenateString(str1, str2) {
  return str1 + " " + str2;
}

str1 = "Hi";
str2 = "Shubham";
console.log(ConcatenateString(str1, str2));

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let SumN = (num1, num2) => {
  return num1 + num2;
};

console.log(`Sum is ${SumN(8, 16)}`);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let ContainsString = (str, char) => {
  if (typeof str === "string") {
    let result = str.includes(char) ? true : false;

    return result;
  } else {
    console.log(`Enter a String`);
  }
};

console.log(`${ContainsString("Shubham", "S")}`);

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function ProductNum(num1, num2 = 5) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 * num2;
  } else {
    console.log(`Enter Numbers`);
  }
}

console.log(ProductNum(2, 8));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function GreetMessage(Name, Age = 17) {
  console.log(`Hi, ${Name} With the age ${Age} `);
}

GreetMessage("Shubham", 18);

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function FuncCall(fun, times) {
  for (let i = 0; i < times; i++) {
    fun();
  }
}

function greet() {
  console.log(`Myself, Shubham Lipane`);
}

FuncCall(greet, 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function Higher_Order(fun1, fun2, value) {
  if (typeof value === "number") {
    let result = fun1(value);

    let return_val = fun2(result);

    return return_val;
  } else {
    console.log(`Enter a number`);
  }
}

function fun1(val) {
  return val * 5;
}

function fun2(val) {
  return val * 10;
}

console.log(Higher_Order(fun1, fun2, 5));

// Completed on 05-12-2024  By Shubham Lipane
