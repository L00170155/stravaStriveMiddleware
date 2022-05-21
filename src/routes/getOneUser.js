const axios = require("axios"); // function to get the data from the API

async function getUser(req) {
    console.log(req.query.userName)
  let response = axios.get('http://localhost:5000/getOneUser', {
        params: {
          userName: req.query.userName,
          password: req.query.password
        },
      });
  return response;
}; //controller function

module.exports = async (req, res) => {
    console.log(req.query.userName)
  let userList = await getUser(req);
  console.log(userList.data.users)
  res.send(userList.data.users)
};
