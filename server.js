require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log(`Connected to Mongo on ${db.host}:${db.port}`);
});
db.on('error', (err) => {
  console.log(`Database error:\n${err}`);
});

app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));

app.listen(process.env.PORT, () => {
  console.log(`You're listening to port ${process.env.PORT}...`)
});