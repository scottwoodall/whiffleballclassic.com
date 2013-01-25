var express = require('express');
var app = express.createServer(express.logger());
var port = process.env.VCAP_APP_PORT || 3000;
var oneYear = 31557600000;

app.use("/assets", express.static(__dirname + '/assets', {maxAge: oneYear}));

app.set('view options', {
  layout: false
});

app.set('view engine', 'jade');

app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(port, function() {
    console.log("Listening on " + port);
});
