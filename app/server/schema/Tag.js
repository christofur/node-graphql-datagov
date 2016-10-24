const GraphQL = require('graphql');

const Tag = new GraphQL.GraphQLObjectType({
  name: 'Tag',
  description: 'This represents a Tag entity',
  fields: () => {
    return {
      text: {
        type: GraphQL.GraphQLString,
        resolve(tag) {
          return tag.text;
        }
      },
    };
  }
});

exports = module.exports = Tag;
