'use strict';

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  if (req.body.name && req.body.email) {
    res.send({
      message: `<h1>Thanks ${req.body.name}, we will send updates to ${req.body.email}</h1>`,
    });
  }
});

app.listen(3000);
