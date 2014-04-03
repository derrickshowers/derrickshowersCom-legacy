var express = require('express'),
	exhb = require('express3-handlebars'),
	json = require('./data/content.json')
	app = express();

// configure app
app.engine('handlebars', exhb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// routes
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	res.render('home', {
		data: json.home
	});
});

app.get('/about', function(req, res) {
	res.render('about', {
		data: json.about
	});
});

app.get('/portfolio', function(req, res) {
	res.render('portfolio', {
		data: json.portfolio
	});
});

app.get('/contact', function(req, res) {
	res.render('contact', {
		data: json.contact
	});
});

app.listen(3000);