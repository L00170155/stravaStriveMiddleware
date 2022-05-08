const axios =require("axios"); // function to get the data from the 
const req = require("express/lib/request");

function addUsers (userId, pass) {
 

    axios.post('http://localhost:5000/addUsers', { 
        userName: userId,
        password: pass
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

    let me = await addUsers(userId, pass);
    res.send(res.data) 
};
