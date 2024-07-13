const mongoose = require('./db');

const loanSchema = new mongoose.Schema({
  bookId: { type: String, required: true },
  userId: { type: String, required: true },
  loanDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});

module.exports = mongoose.model('Loan', loanSchema);
