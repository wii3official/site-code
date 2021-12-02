const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'Wii3root')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Wii3root', 'index.html'));
});

app.listen(9000);
console.log("ready")