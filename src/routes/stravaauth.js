const axios = require("axios"); // function  to get the data from the API  


let getAuth = async () => {
  let response = await axios(`http://localhost:4500/strava/stravaauth`)
  return response;
}; //controller function

module.exports = async (req, res) => {
  let responseAuth = await getAuth()
  console.log(responseAuth)
  res.send(responseAuth.data)
};
