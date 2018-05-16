var express = require('express');
var Router = express.Router();

Router.get('/',function(req,res){
   res.send('Main');

});

module.exports = Router;