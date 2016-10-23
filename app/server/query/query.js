const GraphQL = require('graphql');

const query = new GraphQL.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tag: {
      type: GraphQL.GraphQLString,
      resolve() {
        return 'Tag Text';
      }
    }
  }
})

exports = module.exports = query;