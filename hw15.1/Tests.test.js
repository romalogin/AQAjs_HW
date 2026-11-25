const Books = require("./Controllers/Books");
const Book = require("./Controllers/Books");
const User = require("./Controllers/User");

let userId = "b1c0954d-7e79-4a1b-8fa3-6f7fde48a076";
const userName = "Romalogin";
const password = "mM2ib@ce3pa2SkK";
let token;
let isbn = "9781449325862";

beforeAll(async () => {
  const response = await User.getToken(userName, password);
  token = response.data.token;
  const response2 = await Books.deleteAllBooks(userId, token);
});

test("Get all books", async () => {
  const response = await Books.getAllBooks();
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

// get book by ISBN

test("Get book by isbn", async () => {
  const response = await Books.getBookByIsbn("9781449365035");
  expect(response.status).toBe(200);
  expect(response.data.title).toBe("Speaking JavaScript");
  expect(response.data.pages).toBeGreaterThan(400);
  console.log(response.data);
});

//Negative check user by ID

test("check user by id", async () => {
  const response = await User.userById(userId);
  console.log(response.data);
  expect(response.status).toBe(401);
  expect(response.data).toHaveProperty("message");
  expect(response.data.message).toBe("User not authorized!");
});

//Log In

test("Log In", async () => {
  const response = await User.logIn(userName, password);
  console.log(response.data);
  expect(response.status).toBe(200);
  expect(response.data).toBe(true);
});

// get user ifno

test("get user info", async () => {
  const response = await User.getUserInfo(userId, token);
  expect(response.status).toBe(200);
  expect(response.data.username).toBe("Romalogin");
  console.log(response.data);
});

//Add book

test("add book", async () => {
  const response = await Books.addBook(isbn, userId, token);
  console.log(response.data);
  expect(response.status).toBe(201);
  expect(response.data.books[0].isbn).toBe("9781449325862");
  console.log(response.data);
});
