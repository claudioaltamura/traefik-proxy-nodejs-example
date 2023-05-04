'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';


const APP_NAME = process.env.APP_NAME;

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World at ${APP_NAME}!`);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});