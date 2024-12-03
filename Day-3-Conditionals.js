// Day 03   :- Control Structure

// Activity 1 :- if-Else Statements

// Task 01 :- Write a program to check if a number is +ve, -ve or zero, and log the result to the console.

let number = 5 ;

if(number > 0){
    console.log(`${number} it is a Positive Number`);
}
else if(number < 0)
{
    console.log(`${number} it is a Negative Number`);
}
else{
    console.log(`${number} it is a Zero`);
}


// Task 02 :- Write a program to check if a person is eligible to vote (age>=18) and log the result to the console

let age = 19 ;

if(age>=18)
{
    console.log("Person is eligible to vote");
}
else{
    console.log("person is Not eligible to vote");
}


// Activity 2 : Nested If-else Statement

// Task 03 :- Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 15 ;
let num2 = 12 ;
let num3 = 8 ;

if(num1 > num2){

    if(num1 > num3){
        console.log(`Largest number is ${num1}`);
    }
    else{
        console.log(`Largest number is ${num3}`);
    }
}
else{
    if(num2 > num3){
        console.log(`Largest number is ${num2}`);
    }
    else{
        console.log(`Largest number is ${num3}`);
    }
}


// Activity 3 : Switch Case

// Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console

let day = 5 ;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Enter Valid Input");
    break;
}

// Task 05 : Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = 97 ;

/*

switch (score) {
  case(100 >= score && score > 90):
    console.log("Grade A");
    break;

  case(90 >= score && score > 80):
    console.log("Grade B");
    break;

  case(80 >= score && score > 60):
    console.log("Grade C");
    break;

  case(60 >= score && score > 40):
    console.log("Grade D");
    break;

  case(40 >= score && score > 0):
    console.log("Grade F");
    break;

  default:
    console.log("Enter Marks Between 0 to 100");
    break;
}

// JavaScript's switch statement cannot handle ranges directly (like 100 >= score && score > 90)

*/

switch (score) {
  case (score >= 90):
    console.log("Grade: A");
    break;
  case (score >= 80):
    console.log("Grade: B");
    break;
  case (score >= 70):
    console.log("Grade: C");
    break;
  case (score >= 60):
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}

// Activity 4: Conditional (Ternary) Operator

// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let Num = 6 ;

let result = Num % 2 == 0 ? "Even" : "Odd" ;

console.log(`${Num} is a ${result} number`);

// Activity 5 : Combining Conditions

// Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2000 ;

if(year % 400 == 0){
    console.log(`${year} is a leap year`);
}
else if( (year % 100 != 0) && (year % 4 == 0) ){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} it is not a leap year`);
}


// Completed on 03-12-2024  By Shubham Lipane
