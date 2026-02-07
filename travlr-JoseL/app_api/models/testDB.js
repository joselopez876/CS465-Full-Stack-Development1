const mongoose = require('./db');

mongoose.connection.on('connected', () => {
  console.log(" MongoDB connected successfully");
  process.exit(0);
});

mongoose.connection.on('error', err => {
  console.log(" MongoDB connection error:", err);
});
