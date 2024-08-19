`Use strict`;

// Task - 1.
const enteredNumbers = [];
for (let i = 20; i <= 30; i += 0.5) {
  enteredNumbers.push(i);
}
console.log(enteredNumbers.join(' '));

// Task - 2.
const tensOfDollars = [];
const dollarValue = 27;
for (let i = 10; i <= 100; i += 10) {
  tensOfDollars.push(`${i} доларів коштує ${dollarValue * i} гривень`);
}
console.log(tensOfDollars.join(', '));

// Task - 3.
let num = +prompt('Введіть число');
const resultSquared = [];
let i = 1;
while (i <= 100) {
  if (i * i <= num) {
    resultSquared.push(i);
  }
  i++;
}
console.log(resultSquared);

// Task - 4.
if (num <= 1) {
  console.log(`${num} не є простим числом.`);
} else {
  let primeNumber = 2;
  let isPrime = true;
  do {
    if (num % primeNumber === 0) {
      console.log(`${num} не є простим числом.`);
      isPrime = false;
      break;
    }
    primeNumber++;
  } while (primeNumber * primeNumber <= num);
  if (isPrime) {
    console.log(`${num} є простим числом.`);
  }
}

// Task - 5.
while (num > 1) {
  if (num % 3 !== 0) {
    console.log(`${num} не можна отримати шляхом зведення у число 3.`);
    break; // Прерываем выполнение цикла
  }
  num /= 3; // Делим число на 3
}
if (num === 1) {
  console.log(`${num} можна отримати шляхом зведення у число 3.`);
}
