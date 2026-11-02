import { EBook } from "./EBook.js";
import { Book } from "./Book.js";

const harryPotter = new Book("Harry Potter", "Joanne Rowling", 1997);

const harryPotterEbook = EBook.makeEbook(harryPotter, "pdf");

harryPotterEbook.printInfo();
