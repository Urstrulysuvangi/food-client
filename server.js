const express = require('express');
const db = require('./db');
const menu = require('./models/swaadModel');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server working');
});

app.get('/getmenu', async (req, res) => {
  try {
    const docs = await menu.find({});
    res.send(docs);
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
