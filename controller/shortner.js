const { StatusCodes } = require('http-status-codes');
const Url = require('../model/url');
const shortId = require('shortid');
const port = process.env.PORT || 3000;


const shortner = async (req, res) => {
    const { originalUrl } = req.body;
    const existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
        return res.json({
            msg: `The ShortUrl for this URL already exist`,
            url: `http://localhost:${port}/api/v1/${existingUrl.shortUrl}`
        })
    }
    const shortid = shortId.generate();
    const url = await Url.create({ originalUrl, shortUrl: shortid });

    //http://localhost:4000/api/v1/Dc3jTUFNP });
    res.status(StatusCodes.OK).json({ url, shortUrl: `http://localhost:${port}/api/v1/${shortid}` });
};
//
module.exports = shortner;