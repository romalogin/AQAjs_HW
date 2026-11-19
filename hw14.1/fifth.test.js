const axios = require("axios");

let token;
let userId = "b1c0954d-7e79-4a1b-8fa3-6f7fde48a076";

beforeAll(async () => {
  const response = await axios.post(
    "https://demoqa.com/Account/v1/GenerateToken",
    {
      userName: "Romalogin",
      password: "mM2ib@ce3pa2SkK",
    },
  );

  token = response.data.token;
});

test("get user info", async () => {
  const response = await axios.get(
    `https://demoqa.com/Account/v1/User/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  expect(response.status).toBe(200);
  expect(response.data.username).toBe("Romalogin");
  console.log(response.data);
});
