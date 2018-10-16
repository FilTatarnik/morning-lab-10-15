const express = require('express');

const router = express.Router();

const Room = require('../models/rooms/rooms');
const Furniture = require('../models/furniture/furniture');

// ******************** INDEX ROUTE ******************** //

router.get('/', (req, res) => {
	Furniture.find({},
		(err, allFurniture) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- ALL FURNITURE ---------- \n`, allFurniture);
				res.render('../views/furniture/index.ejs', {
					furniture: allFurniture,
				});
		 	}	
		}
	)
})


// ******************** NEW FURNITURE ROUTE ******************** //

router.get('/new', (req, res) => {
	res.render('../views/furniture/new.ejs')
});


// ******************** CREATE FURNITURE ROUTE ******************** //

router.post('/', (req, res) => {
	Furniture.create(req.body,
		(err, createdFurniture) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- CREATED FURNITURE ---------- \n`, createdFurniture);
				res.redirect('/furniture');
		 	}		
		}
	)
});

// ******************** SHOW FURNITURE ROUTE ******************** //

router.get('/:id', (req, res) => {
	
	Furniture.findById(req.params.id,
		(err, foundFurniture) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
		 	else {
		 		console.log(`---------- FOUND FURNITURE ---------- \n`, foundFurniture);
		 		res.render('../views/furniture/show.ejs', {
		 			furniture: foundFurniture
		 		});
		 	}
		}
	)
})

// ******************** DESTROY FURNITURE ROUTE ******************** //

router.delete('/:id', (req, res) => {
	Furniture.findByIdAndDelete(req.params.id,
		(err, deleteFurniture) => {
			if (err){console.log(`---------- ERROR ---------- \n`, err);}
			else {
				console.log(`---------- DELETE FURNITURE ---------- \n`, deleteFurniture);
				res.redirect('/furniture');
			}
		}
	)
});


// ******************** EDIT FURNITURE ROUTE ******************** //

router.get('/:id/edit', (req, res) => {
	Furniture.findById(req.params.id,
		(err, foundFurniture) => {
			if (err){console.log(`---------- ERROR ---------- \n`, err);}
			else {
				console.log(`---------- FOUND FURNITURE ---------- \n`, foundFurniture);
				res.render('../views/furniture/edit.ejs', {
					furniture: foundFurniture
				})
			}
		}
	)
})


// ******************** UPDATE FURNITURE ROUTE ******************** //

router.put('/:id', (req, res) => {
	Furniture.findByIdAndUpdate(req.params.id,
		req.body,
		(err, updatedFurniture) => {
			if (err){console.log(`---------- ERROR ---------- \n`, err);}
			else {
				console.log(`---------- UPDATE FURNITURE ---------- \n`, updatedFurniture);
				res.redirect('/furniture')
			}
		}
	)
});







module.exports = router;