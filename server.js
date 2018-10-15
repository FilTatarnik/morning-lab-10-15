const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./db/db');

const roomsController = require('./controllers/rooms');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/rooms', roomsController);

// app.get('/', (req, res) => {
// 	// console.log(req);
// 	res.render('rooms/index.ejs')
// });


app.listen(3000, () => {
		console.log('shit works');
})