`Use strict`;

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(arr);

// task - 1.

// used forEach
let sum = 0;
let quantity = 0;

const itemSumQuantity = (item) => {
  if (item >= 0) {
    sum += item;
    quantity++;
  }
};
arr.forEach(itemSumQuantity);

console.log(`Сума позитивних чисел з маcиву ${sum}, кількість позитивних чисел масиву ${quantity}.`);

// used reduce
const itemSumQuantity1 = arr.reduce((total, item) => {
  if (item >= 0) {
    total.sum += item;
    total.quantity++;
  }
  return total;
}, { sum: 0, quantity: 0 });

console.log(`Сума позитивних чисел масиву: ${itemSumQuantity1.sum}. Кількість позитивних чисел масиву: ${itemSumQuantity1.quantity}.`);

// task - 2.

// used Math.min.apply
const minNum = Math.min.apply(null, arr);
const indexMinNum = arr.indexOf(minNum);
console.log(`Мінімальний елемент масиву: ${minNum}. Індекс мінімального елементу масива ${indexMinNum}.`);

// task - 3.

// used Math.max.apply
const maxNum = Math.max.apply(null, arr);
const indexMaxNum = arr.indexOf(maxNum);
console.log(`Мінімальний елемент масиву: ${maxNum}. Індекс мінімального елементу масива ${indexMaxNum}.`);

// task - 4.

// used ForEach
let quantityNum = 0;

const quantityNegativeNum = (item) => {
  if (item <= 0) {
    quantityNum++;
  }
};
arr.forEach(quantityNegativeNum);

console.log(`Кількість негативних чисел масиву: ${quantityNum}.`);

// used reduce
const quantityNegativeNum1 = arr.reduce((total, item) => {
  if (item <= 0) {
    total++;
  }
  return total;
}, 0);

console.log(`Кількість негативних чисел масиву: ${quantityNegativeNum1}.`);

// task - 5.

// used forEach
let unpairedPositiveNum = 0;
arr.forEach((item) => {
  if (item > 0 && item % 2 !== 0) {
    unpairedPositiveNum++;
  }
});
console.log(`Кількість позитивних непарних чисел: ${unpairedPositiveNum}.`);

// task - 6.

// used reduce
const pairedPositiveNum = arr.reduce((acc, item) => {
  if (item >= 0 && item % 2 === 0) {
    acc++;
  }
  return acc;
}, 0);

console.log(`Кількість позитивних парних чисел: ${pairedPositiveNum}.`);

// task - 7.

// used reduce
const sumPairedPositiveNum = arr.reduce((acc, item) => {
  if (item >= 0 && item % 2 === 0) {
    acc += item;
  }
  return acc;
}, 0);

console.log(`Сума позитивних парних чисел масиву: ${sumPairedPositiveNum}.`);

// task - 8.

// used foEach
let sumUnpairedPositiveNum = 0;
arr.forEach((item) => {
  if (item > 0 && item % 2 !== 0) {
    sumUnpairedPositiveNum += item;
  }
});

console.log(`Сума позитивних непарних чисел масиву: ${sumUnpairedPositiveNum}.`);

// task - 9.

// used filter and reduce
const multUnpairedPositiveNum = arr.filter((item) => item > 0);
const multNum = multUnpairedPositiveNum.reduce((acc, item) => {
  acc *= item; return acc;
}, 1);

console.log(`Добуток позитивних елементів масиву: ${multNum}.`);

// task - 10.

// used map
const resetItems = arr.map((item) => (item === maxNum ? item : 0));

console.log(`Обнуленні всі значення окрім максимального: [${resetItems}]`);
