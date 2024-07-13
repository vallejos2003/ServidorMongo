// models/book.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  pages: { type: Number, required: true },
  publishedDate: { type: Date, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
