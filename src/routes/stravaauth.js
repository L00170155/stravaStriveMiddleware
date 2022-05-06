const axios = require("axios"); // function to get the data from the API
const list = [];

let getAuth = async () => {
  let response = await axios(`http://localhost:4500/strava/stravaauth`);
  console.log("auth1")
  return response;
}; //controller function

module.exports = async (req, res) => {
  console.log("auth2")
  let responseAuth = await getAuth();
  list.push(responseAuth.data)
  console.log(list)
  res.send(list);
};
