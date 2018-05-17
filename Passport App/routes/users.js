var express = require('express');
var Router = express.Router();
var mongojs = require('mongojs');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var stratergy = require('passport-local').Stratergy;
var db = mongojs('passportapp', ['users']);

Router.get('/login',function(req,res){
   res.render('login');

});

Router.get('/Register',function(req,res){
	res.render('register');
});

Router.post('/Register',function(req,res){
	console.log('registering');

	var name = req.body.name;
	var username =req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	req.checkBody('name','name field is required').notEmpty();

	req.checkBody('username','username field is required').notEmpty();

	req.checkBody('password','password field is required').notEmpty();

	req.checkBody('password2','passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors,
			name: name,
			username: username
		});
	}else{
		var user = {
			name: name,
			username : username,
			password:password
		}

		db.users.insert(user, function(err, doc){
			if(err){
				res.send(err);
			}else{
				console.log('User Added...');

				//Success Message
				req.flash('success', 'You are registered and can now log in');

				// Redirect after register
				res.location('/');
				res.redirect('/');
			}
		});
	}
});

module.exports = Router;