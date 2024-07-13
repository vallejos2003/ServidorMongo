const mongoose = require('./db');

const authorSchema = new mongoose.Schema({
  name: String,
  birthdate: Date
});

module.exports = mongoose.model('Author', authorSchema);
