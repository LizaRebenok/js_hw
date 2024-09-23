`Use strict`;

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
];
const oneDimensionalArray = [34, 556, [56, 6, [88, 89]]];
const simpleArray = [13, 4885, 43.4, 665, 99];


const arrayCorrection = () => {

  const flat = (arr, result = []) => {
    arr.forEach(item => {
        if (Array.isArray(item)) { //перевірка чи є елемент масивом.
           flat(item, result); //Якщо елемент массив, то викликаеться рекурсивна функція flat і знову проходить перевірка.
        } else {
            result.push(item); //якщо при перевірці не було знайдено масив, елемент пушиться в result.
        }
    })
    return result;
  };

  return (...args) => { // збір аргументів в масив.
        if (args.length !== 1) { // якщо довжина зібраних аргументів не 1 - виклик помилки
            throw new Error('Function accepts only 1 argument, too much arguments provided.');
        }
        return flat(args[0]);
    };
};

const newArray = arrayCorrection ();

console.log(newArray(simpleArray));
console.log(newArray(complexArray));
console.log(newArray(oneDimensionalArray));
console.log(newArray(complexArray,oneDimensionalArray));