const axios = require("axios"); 

async function getUser(req) {
  let response = axios.get("http://localhost:5000/getOneUser", {
    params: {
      userName: req.query.userName,
      password: req.query.password,
    },
  });
  return response;
}

module.exports = async (req, res) => {
  let userList = await getUser(req);
  if (userList) res.send(userList.data.users);
};
