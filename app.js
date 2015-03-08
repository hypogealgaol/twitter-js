//REQUIRES
var express = require( 'express' );
var morgan = require('morgan'); //cool
var swig = require('swig'); 

//swig stuff



//Caching a view saves the rendered document and only re-renders it if the data has actually changed
swig.setDefaults({cache: false}); //gets in way for development


//APP Uses
var app = express();
app.use(morgan('dev'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html'); //default view engine to html
app.set('views', __dirname + '/views'); //our view folder, dirname is safe


//test data
var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

//sends to express view engine, we defined as swig
 


//Gets / Server Handling
app.get('/', function (req, res) {
	res.render( 'index', {title: 'Hall of Fame', people: people} );
  	//res.send('Hello World!')
})

app.get('/news', function (req, res) {
  res.send('Everything is terrible!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})