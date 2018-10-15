const express = require('express');

const router = express.Router();

const Room = require('../models/rooms/rooms');


// ******************** INDEX ROUTE ******************** //

router.get('/', (req, res) => {
	console.log(req);
	Room.find({},
		(err, allRooms) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- ALL ROOM ---------- \n`, allRooms);
				res.render('../views/rooms/index.ejs', {
					rooms: allRooms
				});
		 	}
		})
});


// ******************** NEW ROUTE ******************** //

router.get('/new', (req, res) => {
	res.render('../views/rooms/new.ejs')
});


// ******************** CREATE ROUTE ******************** //

router.post('/', (req, res) => {
	Room.create(req.body,
		(err, createdRoom) => {
		 	if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- CREATED ROOM ---------- \n`, createdRoom);
		 		res.redirect('/rooms');
		 	}
		}
	)
})




module.exports = router;