const express = require('express');
const router = express.Router();
const home = require('../Controllers/User');

router.get('/',home)

module.exports = router;