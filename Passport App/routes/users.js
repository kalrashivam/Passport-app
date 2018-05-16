var express = require('express');
var Router = express.Router();

Router.get('/login',function(req,res){
   res.render('login');

});

Router.get('/Register',function(req,res){
	res.render('register');
});

module.exports = Router;