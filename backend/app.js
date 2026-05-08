const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: 'fullstack-db.cmfckic8q29y.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Gjyothi123',
  database: 'fullstackdb'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to RDS MySQL');
  }
});

app.get('/', (req, res) => {
  res.send('Backend Running 🚀');
});

app.get('/api', (req, res) => {
  res.send('Backend API Running 🚀');
});

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000');
});

app.get('/db', (req, res) => {
  db.query('SHOW DATABASES', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
