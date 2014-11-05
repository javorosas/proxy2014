var express = require('express');
var app = express();
var mongoose = require('mongoose');

var morgan = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cors = require('cors');

// configuration ===========================================
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/proxy');

var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

// setup express app ======================================
app.disable('x-powered-by');
app.use(cors());
app.use(express.static(__dirname + '/public'));   // set the static files location /public/img will be /img for users
app.use(morgan('dev'));    				// log every request to the console
app.use(methodOverride());              // have the ability to simulate DELETE and PUT
app.use(bodyParser.json());             // accept json requests
app.use(bodyParser.urlencoded({ extended: true })); // decode data from url

// routes ==================================================
require('./app/routes')(app);

// start app ===============================================
app.listen(port, ip);                   // startup our app at http://localhost:8080
console.log('Magic happens on port ' + port);      // shoutout to the user
exports = module.exports = app;             // expose app