const express = require('express');
const app = express();
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const connection = require('./models/dynamic.js');


//Settings
dotenv.config({path:'.env'})
app.set('port', process.env.PORT || 3000);

//session var


//MidDlewares
app.use(session({
	secret:'secret',
	saveUninitializated:true,
	resave:true
}));
app.use(morgan('dev'));
app.use(express.urlencoded({extenced:false}));
app.use(express.json());

//Routers
//app.use('/api/user', require('./routes/user.routes'));

//StaticFiles
//app.use(express.static(path.join(__dirname, 'public')));

//Starting Server
app.listen(app.get('port'), ()=> {
	console.log(`Server Iniciado en Puerto: ${app.get('port')}`);
});