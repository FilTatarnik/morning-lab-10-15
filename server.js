const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const roomsController = require('./controllers/rooms');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({extended: false}));
app.use('/rooms', roomsController);

app.listen(3000, () => {
		console.log('shit works');
})