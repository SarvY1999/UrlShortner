const mongoose = require('mongoose');

const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true,
        useUnifiedTopology: true,
    })
};

module.exports = connectDb;