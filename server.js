const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');



// middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));




// controllers
const roomsController = require('./controllers/roomsController');
app.use('/rooms', roomsController);

const furnitureController = require('./controllers/furnitureController.js');
app.use('/furniture', furnitureController);

// app.use(app.router);
// furnitureController.initialize(app);




app.listen(3000, () => {
		console.log('shit works');
})