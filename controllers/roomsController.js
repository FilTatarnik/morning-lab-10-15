const express = require('express');

const router = express.Router();

const Room = require('../models/rooms/rooms');
const Furniture = require('../models/furniture/furniture');


// ******************** INDEX ROUTE ******************** //

router.get('/', (req, res) => {
	// console.log(req);
	Room.find({},
		(err, allRooms) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- ALL ROOMS ---------- \n`, allRooms);
				res.render('../views/rooms/index.ejs', {
					rooms: allRooms
				});
		 	}
		})
});


// ******************** NEW ROOM ROUTE ******************** //

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
});


// ******************** SHOW ROUTE ******************** //

router.get('/:id', (req, res) => {

	Room.findById(req.params.id,
		(err, foundRoom) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- FOUND ROOM ---------- \n`, foundRoom);
		 		res.render('../views/rooms/show.ejs', {
		 			room: foundRoom
		 		});
		 	}
		}
	)
});


// ******************** DESTROY ROUTE ******************** //

router.delete('/:id', (req, res) => {
	Room.findByIdAndDelete(req.params.id,
		(err, deleteRoom) => {
			if (err){console.log(`---------- ERROR ---------- \n`, err);}
			else {
				console.log(`---------- DELETE ROOM ---------- \n`, deleteRoom);
				res.redirect('/rooms');
			}
		}
		)
})


// ******************** EDIT ROUTE ******************** //

router.get('/:id/edit', (req, res) => {
	Room.findById(req.params.id,
		(err, foundRoom) => {
			if (err){console.log(`---------- ERROR ---------- \n`, err);}
			else {
				console.log(`---------- FOUND ROOM ---------- \n`, foundRoom);
				res.render('../views/rooms/edit.ejs', {
					room: foundRoom
				})
			}
		}
	)
});

// ******************** UPDATE ROUTE ******************** //

router.put('/:id', (req, res) => {
	Room.findByIdAndUpdate(req.params.id, req.body,
		(err, updateRoom) => {
		 	if (err){console.log(`---------- ERROR ---------- \n`, err);}
			else {
				console.log(`---------- UPDATE ROOM ---------- \n`, updateRoom);
				res.redirect('/rooms');
			}	
		 }
	)
});







module.exports = router;