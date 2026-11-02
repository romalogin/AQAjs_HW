export class Book {
  #name;
  #author;
  #year;
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  static olderBook(array) {
    let oldBook = array.reduce((acc, value) =>
      acc.year > value.year ? value : acc,
    );
    console.log(`The oldest book is ${oldBook.name} from ${oldBook.year} year`);
  }

  printInfo() {
    console.log(
      `Book name: ${this.name}, author: ${this.author}, year: ${this.year}`,
    );
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new Error("Name need to be a string");
    }
    this.#name = newName;
  }

  get author() {
    return this.#author;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== "string") {
      throw new Error("Author need to be a string");
    }
    this.#author = newAuthor;
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    if (typeof newYear !== "number" || newYear > 2026) {
      throw new Error("Year need to be a string and less then 2026");
    }
    this.#year = newYear;
  }
}
