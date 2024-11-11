import Book from "./Book.js";

class Ebook extends Book {
  _fileSize = 0;

  constructor({title, author, year,fileSize}) {
    super({
      title,
      author,
      year,
    });
    this.fileSize = fileSize;
  }

  get info(){
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Size: ${this.fileSize} MB.`
  }

  getDescription() {
    console.log(`${super.getDescription()} It has ${this.fileSize} MB.`);
  }

  set fileSize(fileSize) {
    if ( typeof fileSize !== `number` || fileSize <= 0){
      console.warn(`The file size must be a number greater than 0.`);
    }
    this._fileSize = fileSize;
  }

  get fileSize() {
    return this._fileSize;
  }
}
export default Ebook;