'use strict';

const express = require('express');
const mysql = require('mysql'); // require for connection
const app = express();

app.use(express.json()); // use for bodyparse

const conn = mysql.createConnection({
  // create connection with database
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.send('Webpage working...');
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/addposts', (req, res) => {
  conn.query(
    `INSERT INTO posts (title, url) VALUES (?,?);`,
    [req.body.title, req.body.url],
    (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.redirect('/');
    }
  );
});
app.listen(3000);
