'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
app.use(express.static('public')); // use static html file
app.use(express.json()); //bodyparse

app.listen(PORT, () => {
  console.log('Connected to the server');
});
