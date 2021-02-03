'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
app.use(express.static('public')); // use static html file
app.use(express.json()); //bodyparse
require('dotenv').config();

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

app.get('/', (req, res) => {
  conn.query('SELECT * FROM music;', (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/playlists', (req, res) => {
  let title = req.body.title;
  let artist = req.body.artist;
  let duration = req.body.duration;
  let path = `/Users/macbook/Greenfox/dgabor92/week-10/foxplayer/music`;
  conn.query(
    'INSERT INTO music (title, artist, duration, path) VALUES (?,?,?,?);',
    [title, artist, duration, path],
    (err, insertStatus) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      const postId = insertStatus.insertId;
      conn.query('SELECT * FROM music WHERE id = ?', [postId], (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(rows);
      });
    }
  );
});

app.listen(PORT, () => {
  console.log('Connected to the server');
});
