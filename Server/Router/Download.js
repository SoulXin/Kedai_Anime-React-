const express = require('express');
const router = express.Router();
const download_Controller = require('../Controller/Download')

// Client
router.get('/check_download/:link',download_Controller.check_download)

module.exports = router;