const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const serverless = require("serverless-http");
const app = express();

app.use(express.static(path.join(__dirname, 'Wii3root')));

app.set('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Wii3root', 'index.html'));
  console.log("sent somethin");
});


module.exports.handler = serverless(app);

