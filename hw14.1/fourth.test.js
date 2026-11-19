const axios = require("axios");

test("autirization", async () => {
  const response = await axios.post(
    "https://demoqa.com/Account/v1/Authorized",
    {
      userName: "Romalogin",
      password: "mM2ib@ce3pa2SkK",
    },
  );
  console.log(response.data);
  expect(response.status).toBe(200);
  expect(response.data).toBe(true);
});
