const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/get-data', UserController.getData);
router.get('/get-data-center-visualization', UserController.centerVisualization);



module.exports = router;