const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/get-data', UserController.getData);


module.exports = router;