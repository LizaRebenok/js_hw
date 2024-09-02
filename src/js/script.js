`Use strict`;

// mainFunction
function mainFunction(callback) {
  const num1 = prompt('Введіть перше число.');
  const num2 = prompt('Введіть друге число.');
  if (num1 === null || num2 === null) {
    alert('Ви відмінили запит чисел!');
    return;
  }
  if (num1.trim() === '' || num2.trim() === '') {
    alert('Ви пропустили введеня числа!');
    return;
  }
  if (isNaN(num1) || isNaN(num2)) {
    alert('Ви ввели не число!');
  } else {
    callback(num1, num2);
  }
}

// Task - 1 exponentiation
function exponentiation(num1, num2) {
  const dedree = num1 ** num2;
  alert(`Результат вашого числа в ступені: ${dedree}.`);
}
mainFunction(exponentiation);

// Task - 2  multiplay
function multiplay(num1, num2) {
  const mult = num1 * num2;
  alert(`Результат вашого множення: ${mult}.`);
}
mainFunction(multiplay);

// Task - 3  division
function division(num1, num2) {
  const div = num1 / num2;
  alert(`Результат вашого ділення: ${div}.`);
}
mainFunction(division);

// Task - 4  modulo
function modulo(num1, num2) {
  const mod = num1 % num2;
  alert(`Результат вашого залишку від поділу: ${mod}.`);
}
mainFunction(modulo);
