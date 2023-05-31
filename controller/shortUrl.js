const { StatusCodes } = require('http-status-codes');
const Url = require('../model/url');

const shortUrl = async (req, res) => {
    const { shortUrl } = req.params;
    const existingUrl = await Url.findOne({ shortUrl });

    if (!existingUrl) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: 'ShortUrl Not found' });
    }

    res.redirect(existingUrl.originalUrl);
};

module.exports = shortUrl