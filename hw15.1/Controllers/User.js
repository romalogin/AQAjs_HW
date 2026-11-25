const axios = require("axios");
class User {
  async userById(id) {
    return await axios.get(`https://demoqa.com/Account/v1/User/${id}`, {
      validateStatus: (code) => code < 500,
    });
  }

  async logIn(userName, password) {
    return await axios.post("https://demoqa.com/Account/v1/Authorized", {
      userName: userName,
      password: password,
    });
  }

  async getToken(userName, password) {
    return await axios.post("https://demoqa.com/Account/v1/GenerateToken", {
      userName: userName,
      password: password,
    });
  }

  async getUserInfo(userId, token) {
    return await axios.get(`https://demoqa.com/Account/v1/User/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

module.exports = new User();
