var http = require('http');
var express = require('express');
var serveStatic = require('serve-static')

const config = {
  "port": 8080,
  "bodyLimit": "100kb",
};

var app = express();
app.server = http.createServer(app);

app.use(express.static('public'));
app.use(serveStatic(__dirname + '/public'));

app.get('/v2', function(req, res){
  res.sendFile('public/index.html', { root: __dirname });
});

app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`);

exports = module.exports = app;