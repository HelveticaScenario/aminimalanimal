'use strict';

var express = require('express'),
	// mongoose = require('mongoose'),
	stylus = require('stylus'),
	http = require('http');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');

	app.use(express.bodyParser());
	app.use(express.methodOverride());
	// app.use(express.cookieParser());
	// app.use(express.session({secret: 'this is a secret'}));

	app.use(app.router);

	app.use(stylus.middleware({
		src: __dirname + '/views',
		dest: __dirname + '/public'
	}));
	app.use(express.static(__dirname + '/public'));
	app.use(function(req, res) {
		// if () {
		res.send(404, '404');
		// };
	});
});

// mongoose.connect('mongodb://localhost/helloExpress');

// var UserSchema = new mongoose.Schema({
// 	name: String,
// 	email: String,
// 	age: Number
// }),
// 	User = mongoose.model('User', UserSchema);

app.get('/', function(req, res) {
	res.render('pages/main');
});

app.get('/projects/:project', function(req, res) {
	res.render('/projects/:project');
});


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});