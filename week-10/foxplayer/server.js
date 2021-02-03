'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
app.use(express.static('public')); // use static html file
app.use(express.json()); //bodyparse

const conn = mysql.createConnection({
  // create connection with database
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'musicplayer',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if (err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.listen(PORT, () => {
  console.log('Connected to the server');
});
