'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const todos = ['get up', 'survive', 'go back to bed'];

app.get('/', (req, res) => {
  res.render('todo', {
    text: 'Things to do today:',
    todos: todos,
  });
});

app.listen(3000);
