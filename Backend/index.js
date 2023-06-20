const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/userlogin', db.getUsers);
app.get('/userlogin/:id', db.getUserById);
app.post('/userlogin', db.createUser);

app.post('/astitvasignup', db.ChemistSignup);

app.put('/userlogin/:id', db.updateUser);
app.delete('/userlogin/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
