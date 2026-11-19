const axios = require("axios");
const { validate } = require("jest-validate");

test("check user by id", async () => {
  const response = await axios.get("https://demoqa.com/Account/v1/User/1", {
    validateStatus: (code) => code < 500,
  });
  console.log(response.data);
  expect(response.status).toBe(401);
  expect(response.data).toHaveProperty("message");
  expect(response.data.message).toBe("User not authorized!");
});
