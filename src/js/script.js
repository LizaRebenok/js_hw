`Use strict`;

// Task 1
const getFactorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * getFactorial(num - 1);
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
