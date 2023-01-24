const express = require('express');
const routes = require('./Routes/routes');
const cors = require('cors');

const app = express();

// app.get('/coffee', (_req, res) => res.status(418).end());
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
