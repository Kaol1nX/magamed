const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/you', (req, res) => {
  res.send('Ты че мычишь вась');
});

app.get('/dota', (req, res) => {
  res.send('3000mmr');
});
     
app.get('/bestcarry', (req, res) => {
  res.send('YatoroGOD');
});

app.get('/Bestiq', (req, res) => {
  res.send('staryibog');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

