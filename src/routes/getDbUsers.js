const express = require("express");

const axios = require("axios"); // function to get the data from the API

let getUser = async () => {
  let response = await axios.get(`http://localhost:5000/getUsers`);
  return response;
}; //controller function

module.exports = async (req, res) => {
  let userList = await getUser();
  console.log(userList.data.users)
  res.send(userList.data.users)
};
