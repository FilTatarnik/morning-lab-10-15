const express = require('express');

const router = express.Router();

const Room = require('../models/rooms/rooms');

router.get('/', (req, res) => {
	// console.log(req);
	res.render('../views/rooms/index.ejs')
});

module.exports = router;