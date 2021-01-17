'use strict';

const express = require('express');
// need to add the path if u render a static file
const path = require('path');
const app = express();
// set the express serve static file
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let inputNumber = Number(req.query.input);

  if (!isNaN(req.query.input)) {
    res.json({ received: inputNumber, result: inputNumber * 2 });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  if (name && title) {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  }

  if (!name && !title) {
    res.status(400);
    res.json({
      error: 'Please provide a name and a title!',
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let { appendable } = req.params;
  if (appendable) {
    res.json({ appended: appendable + 'a' });
  } else {
    res.status(404);
  }
});

app.post('/dountil/:params', (req, res) => {
  let { params } = req.params;

  if (params === 'sum') {
  }
  if (params === 'factor') {
  }
});

app.listen(3000);
