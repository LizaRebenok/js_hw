import PrintedBook from './PrintedBook.js';
import Ebook from './Ebook.js';

const prideAndPrejudice = new PrintedBook({
  title: 'Гордість та упередження',
  author: 'Джейн Остин',
  year: 1813,
  pageCount: 336,
});

const harryPotterPart1 = new Ebook({
  title: 'Гаррі Поттер та філософський камінь',
  author: 'Джоан Роулінг',
  year: 2001,
  fileSize: 5,
});

console.log(prideAndPrejudice.info);
prideAndPrejudice.getDescription();

console.log('-------------------------------------');
console.log(harryPotterPart1.info);
harryPotterPart1.getDescription();

console.log('-------------------------------------');
console.log(harryPotterPart1.fileSize);
console.log(prideAndPrejudice.pageCount);
prideAndPrejudice.pageCount = -336;
harryPotterPart1.year = 'Дві тисячі перший';
