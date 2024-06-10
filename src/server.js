const app = require('./app');
const connectDB = require('./config/database');
const config = require('./config/config');

connectDB();

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});