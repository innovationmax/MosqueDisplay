var prayers = require('prayers');
var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 4000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    //console.log('Request Url:' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/events', function (req, res) {
    var events = fs.readdirSync(__dirname + '/public/img/events/');
    res.json(events);
});

app.get('/prayer', function (req, res) {
    var today = new Date();
    res.json(prayers(today));
});


app.listen(port);