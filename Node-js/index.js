const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const cors = require('cors');

var epmloyeeCotroller = require('./controllers/employeeController.js');
var usersCotroller = require('./controllers/usersController.js');



var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.use('/employees', epmloyeeCotroller);
app.use('/register', usersCotroller);


app.listen(3000, () => console.log('Server started at port number : 3000'));




 