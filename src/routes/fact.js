const express = require("express");

const axios = require("axios"); // function to get the data from the API

let getFacts = async () => {
  let response = await axios(`http://localhost:3000/getmovies`);
  console.log("get1")
  return response;
}; //controller function

module.exports = async (req, res) => {
  console.log("get2")
  let responseFact = await getFacts();
  console.log(responseFact)
  res.send(responseFact.data.trips[0].name);
};
