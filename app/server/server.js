/**
 * Lib / Core dependencies
 */

const http = require('http');
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const graphqlHTTP = require('express-graphql');

/**
 * Project dependencies
 */

const graphqlSchema = require('./schema/graphQLSchema');
const config = require('./config');

const app = express();
app.server = http.createServer(app);

app.use(express.static('public'));
app.use(serveStatic(path.join(__dirname, '/public')));

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}));

app.get('/', function (req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`);

exports = module.exports = app;
