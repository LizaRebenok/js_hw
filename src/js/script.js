`Use strict`;

// Task - 1.
const numbers = [];
for (let i = 10; i <= 20; i++) {
  numbers.push(i);
}
console.log(numbers);

// Task - 2.
const squareNumbers = [];
for (let i = 10; i <= 20; i++) {
  squareNumbers.push(i * i);
}
console.log(squareNumbers);

// Task - 3.
for (let i = 0; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// Task - 4.
let sumOfIntegers = 0;
for (let i = 1; i <= 15; i++) {
  sumOfIntegers += i;
}
console.log(sumOfIntegers);

// Task - 5.
let multiplicationIntegers = 1;
for (let i = 15; i <= 35; i++) {
  multiplicationIntegers *= i;
}
console.log(multiplicationIntegers);

// Task - 6.
let sum = 0;
let num1 = 1;
const num2 = 500;
while (num1 <= num2) {
  sum += num1;
  num1++;
}
const average = sum / num2;
console.log(average);

// Task - 7.
let sumOfPairedNumbers = 0;
let num3 = 30;
while (num3 <= 80) {
  if (num3 % 2 === 0) {
    sumOfPairedNumbers += num3;
  }
  num3++;
}
console.log(sumOfPairedNumbers);

// Task - 8.
const multipleOfTheNumber = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    multipleOfTheNumber.push(i);
  }
}
console.log(multipleOfTheNumber);

// Task - 9. 10. 11. (три задачі в одному коді)
const requestNum = +prompt('Введіть число');
const divisorsNumber = [];
let evenDivisorsCount = 0;
let sumOfEvenDivisors = 0;
for (let i = 1; i <= requestNum; i++) {
  if (requestNum % i === 0) {
    divisorsNumber.push(i);

    if (i % 2 === 0) {
      evenDivisorsCount++;
      sumOfEvenDivisors += i;
    }
  }
}
console.log(`Множники числа ${requestNum}: ${divisorsNumber}.`);
console.log(`Кількість парних множників: ${evenDivisorsCount}`);
console.log(`Сума парних множників: ${sumOfEvenDivisors}`);

// Task - 12.
for (let i = 1; i <= 10; i++) {
  console.group(`Множення для числа ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.groupEnd();
}
