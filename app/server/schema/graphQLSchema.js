const GraphQL = require('graphql');

const query = require('../query/query');

const schema = new GraphQL.GraphQLSchema({
  query
});

exports = module.exports = schema;
