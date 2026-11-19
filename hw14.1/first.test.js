const axios = require("axios");

test("Get all books", async () => {
  const response = await axios.get("https://demoqa.com/BookStore/v1/Books");
  //Check status code
  expect(response.status).toBe(200);
  //Check keys of books
  const books = response.data.books;
  const expectedKeys = [
    "isbn",
    "title",
    "subTitle",
    "author",
    "publish_date",
    "publisher",
    "pages",
    "description",
    "website",
  ];
  books.forEach((book) => {
    expectedKeys.forEach((key) => {
      expect(book).toHaveProperty(key);
    });
  });
  console.log(response.data);
});
