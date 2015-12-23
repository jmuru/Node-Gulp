
var express = require('express');
var exphbs = require('express-handlebars');

var app = express(); 

app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars'); 

var index_page = require('./routes/index.js');


app.use('/', index_page); 
app.use(express.static('public')); 

app.listen(3000, function() {
	console.log('listenig on port 3000.... ');
});