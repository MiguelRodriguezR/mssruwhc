const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const webhookRoutes = require('./routes/webhookRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api', webhookRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = app;