var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/notfound', function(req, res) {
    res.status(404).json({message: 'Page not found'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});