'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());

// must set for create connection
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
  // insecureAuth: 'true', //ez akkor, ha minden rendben van es megis auth security errort kaptok
});

// connect error handling
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

app.get('/bookname', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(rows);
  });
});

app.listen(3000);
