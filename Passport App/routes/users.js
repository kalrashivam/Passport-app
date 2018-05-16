var express = require('express');
var Router = express.Router();

Router.get('/login',function(req,res){
   res.send('Login');

});

Router.get('/Register',function(req,res){
	res.sned('Register');
});

module.exports = Router;