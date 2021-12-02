const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'Wii3root')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Wii3root', 'index.html'));
  console.log("sent somethin");
});

app.listen(9000);
module.exports.handler = serverless(app);
