const axios = require("axios");

let getAuth = async () => {
  let response = await axios
    .get(`http://localhost:4500/strava/stravaauth`)
    .catch(function (error) {
      console.log(error);
    });

  return response;
}; //controller function

module.exports = async (req, res) => {
  let responseAuth = await getAuth();
  if (responseAuth) res.send(responseAuth.data);
};
