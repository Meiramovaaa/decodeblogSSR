const express = require('express');
const router = express.Router();

router.use(require('./auth'))
router.use(require('./categories'))
router.use(require('./blog'))
router.use(require('./user'))
module.exports = router