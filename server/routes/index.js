const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/', mainController.homepage);
router.get('/about', mainController.about);
router.get('/qoutes', mainController.qoutes);
module.exports = router;