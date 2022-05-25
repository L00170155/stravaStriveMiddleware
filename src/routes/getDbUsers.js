const axios = require("axios"); 

let getUser = async () => {
  let response = await axios.get(`http://localhost:5000/getUsers`);
  return response;
}; 

module.exports = async (req, res) => {
  let userList = await getUser();
  res.send(userList.data.users);
};
