`Use strict`;


const firstNumber = Number(prompt('Введіть перше число'));
const checkNum1 = isNaN(firstNumber) ? Number(prompt(`Помилка! Введіть число.`)) : firstNumber;
const secondNumber = Number(prompt('Введіть друге число'));
const checkNum2 = isNaN(secondNumber) ? Number(prompt(`Помилка! Введіть число.`)) : secondNumber;
const thirdNumber = Number(prompt('Введіть третє число'));
const checkNum3 = isNaN(thirdNumber) ? Number(prompt(`Помилка! Введіть число.`)) : thirdNumber;

const arithmeticMean = (( checkNum1 || firstNumber) + (checkNum2 || secondNumber) + ( checkNum3 || thirdNumber)) / 3;

alert(`Середнє арифметичне введених чисел: ${arithmeticMean}.`);
