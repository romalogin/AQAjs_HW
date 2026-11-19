const axios = require("axios");

test("Get book by isbn", async () => {
  const response = await axios.get(
    "https://demoqa.com/BookStore/v1/Book?ISBN=9781449365035",
  );
  expect(response.status).toBe(200);
  expect(response.data.title).toBe("Speaking JavaScript");
  expect(response.data.pages).toBeGreaterThan(400);
  console.log(response.data);
});
