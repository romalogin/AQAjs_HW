import { Book } from "./Book.js";

export const witcher = new Book("Withcer", "Andrzej Sapkowski", 1986);

export const harryPotter = new Book("Harry Potter", "Joanne Rowling", 1997);

export const theGreatGatsby = new Book(
  "The Great Gatsby",
  "Scott Fitzgerald",
  1925,
);

witcher.printInfo();
harryPotter.printInfo();
theGreatGatsby.printInfo();
