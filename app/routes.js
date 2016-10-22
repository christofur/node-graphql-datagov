var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');


// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

router.get('/v2', function (req, res) {
  res.send(ReactDOMServer.renderToString(HelloItem));
});

var HelloItem = React.createElement('div', "", "Hello, React!");

// add your routes here

module.exports = router
