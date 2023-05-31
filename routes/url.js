const express = require('express');
const router = express.Router();
const shortner = require('../controller/shortner');
const shortUrl = require('../controller/shortUrl');

router.route('/shortner').post(shortner);
router.route('/:shortUrl').get(shortUrl);


module.exports = router;