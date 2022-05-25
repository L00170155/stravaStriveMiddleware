const axios = require("axios"); 

let getAuth = async () => {
  let response = await axios
    .get(`http://localhost:4500/strava/stravalogin`)
    .catch(function (error) {
      console.log(error);
    });

  return response;
}; 

module.exports = async (req, res) => {
  let responseAuth = await getAuth();
  if (responseAuth.data) res.send(responseAuth.data);
};
