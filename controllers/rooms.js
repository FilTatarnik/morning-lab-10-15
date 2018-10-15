const express = require('express');

const router = express.Router();

const Room = require('../models/rooms/rooms');

router.get('/', (req, res) => {
	// console.log(req);
	res.render('../views/rooms/index.ejs')
});

router.get('/new', (req, res) => {
	res.render('../views/rooms/new.ejs')
});

module.exports = router;