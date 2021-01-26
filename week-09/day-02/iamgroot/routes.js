const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let message = req.query.message;
  if (message) {
    res.send({
      recieved: message,
      translated: 'I am Groot!',
    });
  } else {
    res.status(400).send({
      error: 'I am Groot',
    });
  }
});

module.exports = app;
