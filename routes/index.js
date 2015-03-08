var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
//all app.VERB can be written as router.VERB	
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

// say that a client GET requests the path /users/nimit
router.get( '/users/:name', function (req, res) {
  console.log( req.params.name ); // --> 'nimit'
});


module.exports = router;