`Use strict`;

// 1. Створення масиву, довжину і елементи задає користувач.
const userArr = () => {
  const arrLenght = Number(prompt('Введіть бажану довжину масиву, одним числом.'));

  if (Number.isNaN(arrLenght) || arrLenght <= 0) {
    alert('Ви не ввели число для довжини масиву');
    return;
  }

  const addItem = Array.from({ length: arrLenght });
  for (let i = 0; i <= arrLenght - 1; i++) {
    const item = Number(prompt('Введіть числа для заповнення масиву.'));
    addItem[i] = item;

    if (Number.isNaN(addItem[i]) || addItem[i] <= 0) {
      alert('Ви не ввели елемент або елементи масиву.');
      return;
    }
  }
  return addItem;
};

// 2. Сортування масиву за зростанням.
const arr = userArr();
const modificationArr = [...arr];
modificationArr.sort((a, b) => a - b);

// 3. Видалення елементів з масиву 2 по 4.
const removeItemInArr = () => {
  const deleteItem = [...modificationArr];

  if (deleteItem.length > 4) {
    deleteItem.splice(2, 3);
  } else {
    return 'Видалення елементів з 2 по 4 індекс - не можливе, через коротку довжину масиву.';
  }
  return deleteItem;
};

// 4. Виведення змін у консоль.
console.log(arr);
console.log(modificationArr);
console.log(removeItemInArr());
