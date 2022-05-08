const express = require("express");

const axios = require("axios"); // function to get the data from the API

let addUsers = async () => {
  let response = await axios(`http://localhost:5000/getUsers`);
  return response;
}; //controller function

module.exports = async (req, res) => {
  let userList = await addUsers();
  console.log(userList.data.users)
  res.send(userList.data.users)
};
