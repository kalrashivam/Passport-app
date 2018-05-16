var express = require('express');
var Router = express.Router();

Router.get('/',function(req,res){
   res.render('index');

});

module.exports = Router;