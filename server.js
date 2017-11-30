const express = require('express');
const app = express();
const DIR = require('./DIR.js');
const port = 8000;

app.use(express.static(DIR.dest));
app.listen(port, () => {
  console.log(`access http://localhost:${port}/`);
});