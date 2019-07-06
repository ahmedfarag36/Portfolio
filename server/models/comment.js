const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  author: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', schema);