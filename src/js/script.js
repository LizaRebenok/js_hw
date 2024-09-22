`Use strict`;

const insertWordInto = (str) => {
  let iteration = 0;

   return function (word)  {
    if (!word.trim()){
      console.log(`Пустий рядок, введіть слово.`);
      return str;
    }

    const arrayStr = str.split(` `);
    arrayStr.splice(iteration, 0, word);
    iteration = (iteration + 1) % arrayStr.length;

    return arrayStr.join(` `);
   };
};

const insert = insertWordInto('hello world')
const result = insert('Odesa');
console.log(result);
const secondResult = insert('Odesa');
console.log(secondResult);
const thirdResult = insert('Odesa');
console.log(thirdResult);
const fourthResult = insert('Odesa');
console.log(fourthResult);
