module.exports = function (app) {

	var Message = require('./models/message');

	app.get('/api/messages', function (req, res, next) {
		Message.find(function (err, messages) {
			if (err) return next(err);
			res.json(messages);
		});
	});

	app.get('/api/message/:id', function (req, res, next) {
		Message.findById(req.params.id, function (err, message) {
			if (err) return next(err);
			if (!message) return next('Message not found');
			res.json(message);
		});
	});

	app.post('/api/message', function (req, res, next) {
		if (!req.body.content)
			return next('content parameter required');
		var date = new Date();
		var message = new Message({ 
			content: req.body.content,
			createdOn: date
		});
		message.save(function (err, savedMessage) {
			if (err) return next(err);
			res.json(savedMessage);
		});
	});

	app.delete('/api/message/:id', function (req, res, next) {
		if (!req.params.id)
			return next('id parameter required');
		Message.findByIdAndRemove(req.params.id, function (err, message) {
			if (err) return next(err);
			if (!message) return next('Message not found');
			res.json(message);
		});
	});

	app.get('/', function (req, res, next) {
		res.send('./../public/index.html');
	});

};