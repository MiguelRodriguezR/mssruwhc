const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use('/api', webhookRoutes);

module.exports = app;