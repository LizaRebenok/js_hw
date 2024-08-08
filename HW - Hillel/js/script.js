`Use strict`;

function validNumber(numberRequest) {
    let number;
    do {
        number = Number(prompt(numberRequest));
        if (isNaN(number)) {
            alert('Помилка! Введіть число.');
        }
    } while (isNaN(number));
    return number;
}

const firstNumber = validNumber('Введіть перше число');
const secondNumber = validNumber('Введіть друге число');
const thirdNumber = validNumber('Введіть трете число');

const arithmeticMean = (firstNumber + secondNumber + thirdNumber) / 3;

alert(`Середнє арифметичне введених чисел: ${arithmeticMean}.`);
