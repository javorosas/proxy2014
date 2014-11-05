var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
	content: String,
	createdOn: Date
});

module.exports = mongoose.model('Loan', Message);