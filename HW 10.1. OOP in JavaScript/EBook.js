import { Book } from "./Book.js";

export class EBook extends Book {
  #format;
  constructor(name, author, year, format) {
    super(name, author, year);
    this.format = format;
  }

  static makeEbook(book, format) {
    return new EBook(book.name, book.author, book.year, format);
  }

  printInfo() {
    console.log(
      `Book name: ${this.name}, author: ${this.author}, year: ${this.year}, format ${this.format}`,
    );
  }

  get format() {
    return this.#format;
  }

  set format(newFormat) {
    const validFormats = ["epub", "fb2", "mobi", "pdf", "txt"];
    if (!validFormats.includes(newFormat)) {
      throw new Error("This format is not exist");
    }

    this.#format = newFormat;
  }
}
