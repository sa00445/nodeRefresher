const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.send('<p> This is a paragraph </p>')
})
