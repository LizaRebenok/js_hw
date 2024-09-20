`Use strict`;

// Task 1
const getFactorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * getFactorial(number - 1);
};
console.log(getFactorial(3));

// Task 2
const num = Number(prompt('Введіть число, яке потрібно звести в ступінь.'));
const degree = Number(prompt('Введіть ступінь числа.'));

const pow = (num, degree) => {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
};

const resultPow = pow(num, degree);
console.log(`Результат: ${num}^${degree} = ${resultPow}.`);

// Task 3
const sum = (a, b) => {
  if (a === 0) {
    return b;
  }
  return sum(a - 1, b + 1);
};
console.log(sum(4, 6));
