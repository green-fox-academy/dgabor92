'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql'); // for connection
app.use(express.json()); // for body parse
const cors = require('cors'); // for CORS policy
const path = require('path'); // to use for the static HTML file

app.use(express.static('assets')); // to set the directory for static

app.use(cors());
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'bookstore.html'));
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

app.get('/bookwithfulldata', (req, res) => {
  conn.query(
    `SELECT
    book_mast.book_name ,
    book_mast.book_price ,
    author.aut_name,
    category.cate_descrip,
    publisher.pub_name
  FROM
    book_mast
  INNER JOIN category ON
    book_mast.cate_id = category.cate_id
  INNER JOIN author ON
    book_mast.aut_id = author.aut_id
  INNER JOIN publisher ON
    book_mast.pub_id = publisher.pub_id`,
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json(rows);
    }
  );
});

app.listen(3000);
