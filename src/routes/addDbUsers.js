const axios =require("axios"); // function to get the data from the db


function addUsers (userId, pass, clientId, clientSecret, token) {
 
    console.log(clientId)
    console.log(clientSecret)
    console.log(token)
    axios.post('http://localhost:5000/addUsers', { 
        userName: userId,
        password: pass,
        stravaClientId: clientId,
        stravaClientSecret: clientSecret,
        stravaToken: token,
    }) 
    .then(function (res) {

        return "good"
    })
    .catch(function (error) {

    });
    return "goo"
}
    

module.exports = async (req, res) => {
    let userId = req.body.userName.user
    let pass = req.body.password.pass
    let clientId = req.body.stravaClientId.clientId
    let clientSecret = req.body.stravaClientSecret.clientSecret
    let token = req.body.stravaToken.token
    let me = await addUsers(userId, pass, clientId, clientSecret, token);
    res.send(res.data) 
};
