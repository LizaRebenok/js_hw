`Use strict`;

// Task - 1
const arrRandom = ['Lviv', 23, 'Dnipro', true, 45, 67, 'Kyiv', '10'];
function arithmeticMean(array) {
  let sumNumber = 0;
  let countNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sumNumber += array[i];
      countNumber++;
    }
  }
  const mean = sumNumber / countNumber;
  console.log(mean);
}
arithmeticMean(arrRandom);

// Task - 2
const x = Number(prompt('Введіть перше число.'));
const znak = prompt('Введіть математичний символ ( +, -, *, /, %, ^).');
const y = Number(prompt('Введіть друге число.'));

function doMath(x, znak, y) {
  let result;
  if (x === null || y === null || znak === null) {
    alert('Пропущене одне из значень, введіть значення повторно.');
  } else if (Number.isNaN(x) || Number.isNaN(y)) {
    alert('Не введено число, введіть числа.');
  } else if (typeof znak !== 'string' || znak.length !== 1) {
    alert('Не введено математичний символ, введіть математичний символ.');
  } else {
    switch (znak) {
      case
        '+'
        :
        result = x + y;
        break;
      case
        '-'
        :
        result = x - y;
        break;
      case
        '*'
        :
        result = x * y;
        break;
      case
        '/'
        :
        result = x / y;
        break;
      case
        '%'
        :
        result = x % y;
        break;
      case
        '^'
        :
        result = x ** y;
        break;
      default:
        alert('не вірний символ.');
    }
  }
  if (result === undefined) {
    return 'Обчислення не відбулось, напишіть значення повторно.';
  }
  return `Результат: ${result}.`;
}
alert(doMath(x, znak, y));

// Task - 3
function userArr() {
  const numRows = Number(prompt('Введіть кількість рядків'));
  const numColumns = Number(prompt('Введіть кількість колонок'));

  if (Number.isNaN(numRows) || numRows <= 0 || Number.isNaN(numColumns) || numColumns <= 0) {
    console.log('Кількіть рядків або колонок має бути позитивним числом');
  }

  const userTable = Array.from({ length: numRows }, () => Array(numColumns));

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      const value = prompt(`Введіть значення для єлементів рядка:[${i}], колонки:[${j}]`);
      userTable[i][j] = value;
    }
  }
  return userTable;
}
console.log(userArr());

// Task - 4
function userCorrectionString(string, removalItem) {
  const itemSet = new Set(removalItem.split('').filter((char) => char !== ''));
  return Array.from(string)
    .filter((char) => !itemSet.has(char) || char === ' ')
    .join('');
}

const userString = prompt('Введіть рядок слів', '');
const characterRemoval = prompt('Введіть символи, які треба видалити', '');

if (userString === null || userString.trim() === '') {
  alert('Ви не ввели рядок слів');
} else if (characterRemoval === null || characterRemoval.trim() === '') {
  alert('Ви не ввели символи, які треба прибрати');
}

const result = userCorrectionString(userString, characterRemoval);
console.log(result);
