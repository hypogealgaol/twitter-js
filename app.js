//REQUIRES
var express = require( 'express' ); //require subdirectories always get index.js
var morgan = require('morgan'); //cool
var swig = require('swig'); 
var routes = require('./routes/'); //file path internal

//swig stuff



//Caching a view saves the rendered document and only re-renders it if the data has actually changed
swig.setDefaults({cache: false}); //gets in way for development


//APP Uses
var app = express();
app.use(morgan('dev'));
app.use('/', routes); //gets index.js exports, registers as middleware

/* The express.static() method takes a root directory parameter and returns a middleware function. 
Like with Morgan, we pass this middleware to app.use() to intercept all requests. 
It checks if a request URI path matches a filepath in the public directory; if so, it sends that file back as-is.
*/
app.use(express.static(__dirname+'/public')); //allows designation of folders to serve static content


//Set
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