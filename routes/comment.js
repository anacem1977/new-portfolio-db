const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post("/comment", ctrl.user.addComment)

module.exports = router;