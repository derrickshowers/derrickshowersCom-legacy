var express = require('express'),
	exhb = require('express3-handlebars'),
	nodemailer = require("nodemailer"),
	json = require('./data/content.json'),
	app = express();

// configure app
app.engine('handlebars', exhb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.urlencoded());

// setup mail transport
var smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Zoho",
	auth: {
		user: "derrick@derrickshowers.com",
		pass: process.env.MAIL_PASSWORD
	}
});

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

app.post('/contact/sendmsg', function(req, res) {
	var name = req.body.fullname;
	var email = req.body.email;
	var subject = req.body.subject;
	var msg = req.body.message;

	// setup data to send via e-mail
	var mailOptions = {
		from: "DoNotReply <donotreply@derrickshowers.com>",
		to: "Derrick Showers <derrick@derrickshowers.com>",
		subject: subject,
		text: "Message from: " + name + " at " + email + "\n\n" + "Message: " + msg
	}

	// send it off
	smtpTransport.sendMail(mailOptions, function(error, response){
		if (error) {
			//console.log(error);
			res.json(200, { message: 'failed' });
		} else {
			//console.log("Message sent: " + response.message);
			res.json(200, { message: 'success' });
		}
		smtpTransport.close();
	});

	//console.log(name + ', ' + email + ', ' + subject + ', ' + msg);
	
});

app.listen(3000);