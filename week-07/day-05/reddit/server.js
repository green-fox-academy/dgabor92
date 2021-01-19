'use strict';

const express = require('express');
const mysql = require('mysql'); // require for connection
const app = express();
app.use(express.static('public'));

// Middleware, ami lefut mielőtt még az endpoint feldolgozása
// megkezdődik, beállítjuk előre a response típusát JSON-re
// app.use(function (req, res, next) {
//   res.setHeader('Content-Type', 'application/json');
//   next();
// });

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
  res.sendFile('index.html');
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

app.post('/posts', (req, res) => {
  let newDate = new Date();
  conn.query(
    `INSERT INTO posts (title, url, timestamps) VALUES (?,?,?);`,
    [req.body.title, req.body.url, newDate],
    (err, insertStatus) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      console.log(insertStatus);
      const postId = insertStatus.insertId;
      conn.query(`SELECT * FROM posts WHERE id = ?`, [postId], (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        const post = rows[0];
        res.status(200).json(post);
      });
    }
  );
});

app.put('/posts/:id/upvote', (req, res) => {
  const postId = req.params.id;

  conn.query(`SELECT * FROM posts WHERE id = ?`, [postId], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({
        error: `Post [${postId}] not found.`,
      });
      return;
    }

    // ID alapján keresünk, ezért biztosan 1 találat lesz, ami egy 1 elemű tömb
    const post = rows[0];
    post.score++;
    conn.query(
      `UPDATE posts SET score = ? WHERE id = ?`,
      [post.score, postId],
      (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(post);
      }
    );
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  const postId = req.params.id;

  conn.query(`SELECT * FROM posts WHERE id = ?`, [postId], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({
        error: `Post [${postId}] not found.`,
      });
      return;
    }

    // ID alapján keresünk, ezért biztosan 1 találat lesz, ami egy 1 elemű tömb
    const post = rows[0];
    post.score--;
    conn.query(
      `UPDATE posts SET score = ? WHERE id = ?`,
      [post.score, postId],
      (err, rows) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(post);
      }
    );
  });
});

app.delete('/posts/:id', (req, res) => {
  const postId = Number(req.params.id);

  if (isNaN(postId)) {
    res.status(400).json({
      error: `Post id must be a number!`,
    });
  }

  conn.query(`SELECT * FROM posts WHERE id = ?`, [postId], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    if (rows.length === 0) {
      res.status(404).json({
        error: `Post [${postId}] not found.`,
      });
      return;
    }

    const post = rows[0];

    conn.query(`DELETE FROM posts WHERE id = ?`, [postId], (err, status) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(200).json(post);
    });
  });
});

app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title, url } = req.body;

  conn.query(`SELECT * FROM posts WHERE id = ?`, [postId], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    const post = rows[0];
    post.title = title;
    post.url = url;

    conn.query(
      `UPDATE posts SET url = ?, title = ? WHERE id = ?`,
      [url, title, postId],
      (err, status) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.status(200).json(post);
      }
    );
  });
});
app.listen(3000);

//regisztrál álláskeresőként szeretném magamat regisztráltatni
