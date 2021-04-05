const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post("/add", ctrl.comment.addComment)
router.get('/', ctrl.comment.getAllComments);

module.exports = router;