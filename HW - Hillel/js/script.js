`Use strict`;

// Task - 1

const name = prompt(`What is your name?`);
const age = prompt( `How old are you?`);
const likesProgramming = confirm(`Do you like to program?`);

// Task - 2

console.log(name,age,likesProgramming);
console.log(typeof name, typeof age, typeof likesProgramming);

// Task - 3

const greeting = `Hello, ${name}!`;
alert(greeting);

// Task - 4

const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

// Task - 5

let isAdult = Boolean(numericAge);


if(numericAge >= 18) {

    console.log(`True`);

} else {

    console.log(`False`);
}

