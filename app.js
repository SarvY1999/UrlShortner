require('dotenv').config();
const express = require('express');
require('express-async-errors');
const app = express();
const connectDb = require('./db/connectDb');
const router = require('./routes/url');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', router);

const start = async () => {
    try {
        await connectDb(process.env.DB);
        app.listen(port, () => {
            console.log(`Server is listening at ${port}`);
        })
    } catch (error) {
        console.error(error);
    }

};

start();