var express = require('express');
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var expressvalidator = require('express-validator');
var bodyparser = require('body-parser');
var localstratergy = require('passport-local').Stratergy;

var port = 3000;

//setting routes
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//setting view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// setting static folder
app.use(express.static(path.join(__dirname,'public')));

// Body parser set up
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extenden:false}));

// express session set up
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// passport set up
app.use(passport.initialize());
app.use(passport.session());

// Express Validator set up
app.use(expressvalidator({
	errorFormatter: function(param,msg,value){
		var namespace =param.split('.'),
		rot = namespace.shift(),
		formParam =root;
		while(namespace.length) {
			form+= '[' + namespace.shift() + ']';

		}
		return{
			param:formPram,
			msg:msg,
			value:value
		};
	}
}));

// Connect-Flah Middleware
app.use(flash());
app.use(function(req,res,next){
	res.locals.messages = require('express-messages')(req,res);
	next();
});

// Setting Routes
app.use('/',routes);
app.use('/users',users);

app.listen(port);


console.log('server stared on '+ port);