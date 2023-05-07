const express = require('express');
const db = require('./db.js');

const Pizza = require('./models/pizzaModel.js')

const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute.js')


app.use('/api/pizzas/', pizzasRoute)

app.get('/', (req, res) => {
  res.send('server working');
});


// app.get("/getpizzas", (req, res) => {
//   Pizza.find({})
//     .exec()
//     .then((docs) => {
//       res.send(docs);
//     })S
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send("Error retrieving pizzas");
//     });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
