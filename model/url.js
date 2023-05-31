const mongoose = require('mongoose');
// const shortId = require('shortid');
const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        unique: true,
    }

});

module.exports = mongoose.model('Url', urlSchema);

