class Book {
title = null;
author = null;
_year = 0;

constructor({title, author, year}) {
  this.title = title;
  this.author = author;
  this.year = year;
}

get info(){
  return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}.`;
}

getDescription(){
  return  `This is a book titled ${this.title} by ${this.author}.`;
  }

set year (year) {
  if (typeof(year) !== `number`) {
    console.warn(`The year of publication of the book should be a number.`);
    return;
  }
  this._year = year;
}

get year (){
  return this._year;
}
}

export default Book;
