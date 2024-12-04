// Day 04 :- Loops

// Activity 1 :- For Loop

// Task 01 :- Write a program to print the numbers from 1 to 10 using a for loop

function PrintNum(num) {
  for (let index = 1; index <= num; index++) {
    console.log(index);
  }
}

PrintNum(10);

// Task 02  :- Write a program to print the multiplication table of 5 using a for loop

console.log(`Multiplication Table of 5`);

for (let index = 1; index <= 10; index++) {
  console.log(`5 * ${index} = ${5 * index}`);
}

// Activity 02 : While Loop

// Task 03 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop

let num = 1;
let sum = 0;

while (num <= 10) {
  sum += num;
  num++;
}

console.log(`Sum of numbers from 1 to 10 is ${sum}`);

// Task 04 : Write a program to print numbers from 10 to 1 using a while loop

console.log(`Printing Numbers from 10 to 1 using while loop`);

num = 10;

while (num >= 1) {
  console.log(num);
  num--;
}

// Activity 3 : Do While Loop

// Task 05 :  Write a program to print numbers from 1 to 5 using a do...while loop

console.log(`Printing numbers from 1 to 5 using do...while loop`);

num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);

// Task 06 :    Write a program to calculate the factorial of number using a do...while loop.

function factorial(num) {
  let i = 1;
  let fact = 1;

  do {
    fact *= i;
    i++;
  } while (i <= num);

  console.log(`Factorial of ${num} = ${fact}`);
}

factorial(5);

// Activity 04 :- Nested Loops

// Task 07: Write a program to print a pattern using nested for loops   :-

/*

 *
 *   *
 *   *   *
 *   *   *   *
 *   *   *   *   *
 
*/

let row = 5;
let col = 5;

for (let i = 0; i < row; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(" * ");
  }
  console.log();
}

// process.stdout.write(); // It is used to print without trailing a new line

// Activity 05 :- Loop Control Statements

// Task 08 :- Write a program to print the numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    continue;
  }

  console.log(index);
}

// Task 09 :- Write a program to print the numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let index = 1; index <= 10; index++) {
  if (index == 7) {
    break;
  }

  console.log(index);
}

// Completed on 04-12-2024  By Shubham Lipane
