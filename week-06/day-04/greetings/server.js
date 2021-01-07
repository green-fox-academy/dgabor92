'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if (req.query.name) {
    let name = req.query.name;
    res.render('home', {
      text: `Welcome back ${name}!`,
    });
  } else {
    res.render('home', {
      text: `Welcome back Guest!`,
    });
  }
});

app.listen(3000);
