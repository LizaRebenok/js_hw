import Book from './Book.js';

class PrintedBook extends Book {
  _pageCount = 0;

  constructor({title, author, year, pageCount}) {
    super({
        title,
        author,
        year,
  });
    this.pageCount = pageCount;
  }

  get info(){
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Pages: ${this.pageCount}.`
  }

  getDescription() {
    console.log(`${super.getDescription()} It has ${this.pageCount} pages.`);
  }

  set pageCount(pageCount) {
    if ( typeof pageCount !== `number` || pageCount <= 0){
      console.warn(`The number of pages in the book must be greater than 0.`);
    }
    this._pageCount = pageCount;
  }

  get pageCount() {
    return this._pageCount;
  }
}

export default PrintedBook;