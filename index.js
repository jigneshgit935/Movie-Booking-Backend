const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db');

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not Allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'Api is working' });
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
