const axios = require("axios");

class Books {
  async getAllBooks() {
    return await axios.get("https://demoqa.com/BookStore/v1/Books");
  }

  async getBookByIsbn(isbn) {
    return await axios.get(`https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`);
  }

  async addBook(isbn, userId, token) {
    return await axios.post(
      `https://bookstore.toolsqa.com/BookStore/v1/Books`,
      {
        userId: userId,
        collectionOfIsbns: [
          {
            isbn: isbn,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  async deleteAllBooks(userId, token) {
    return await axios.delete(
      `https://bookstore.toolsqa.com/BookStore/v1/Books?UserId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}

module.exports = new Books();
