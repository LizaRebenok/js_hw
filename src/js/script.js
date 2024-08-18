`Use strict`;

// Task - 1.  Вивести на сторінку в один рядок через кому числа від 10 до 20.
const numbers = [];
for (let i = 10; i <= 20; i++) {
  numbers.push(i);
}
console.log(numbers);

// Task - 2. Вивести квадрати чисел від 10 до 20.
const squareNumbers = [];
for (let i = 10; i <= 20; i++) {
  squareNumbers.push(i * i);
}
console.log(squareNumbers);

// Task - 3. Вивести таблицю множення на 7.
for (let i = 0; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// Task - 4. Знайти суму всіх цілих чисел від 1 до 15.
let sumOfIntegers = 0;
for (let i = 1; i <= 15; i++) {
  sumOfIntegers += i;
}
console.log(sumOfIntegers);

// Task - 5. Знайти добуток усіх цілих чисел від 15 до 35.
let multiplicationIntegers = 1;
for (let i = 15; i <= 35; i++) {
  multiplicationIntegers *= i;
}
console.log(multiplicationIntegers);

// Task - 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum = 0;
let num1 = 1;
const num2 = 500;
while (num1 <= num2) {
  sum += num1;
  num1++;
}
const average = sum / num2;
console.log(average);

// Task - 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
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
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
const multipleOfTheNumber = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    multipleOfTheNumber.push(i);
  }
}
console.log(multipleOfTheNumber);

// Task - 9.10.11
// 9 - Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10 - Визначити кількість його парних дільників.
// 11 - Знайти суму його парних дільників.
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

// Task - 12. Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
  console.group(`Множення для числа ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.groupEnd();
}
