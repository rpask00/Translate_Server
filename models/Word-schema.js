const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    pl: String,
    eng: String,
    level: String,
})

module.exports = mongoose.model('Word', WordSchema);