const GraphQL = require('graphql');
const Tag = require('../schema/Tag');
const Db = require('../repository/db');

const query = new GraphQL.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tag: {
      type: new GraphQL.GraphQLList(Tag),
      args: {
        text: {
          type: GraphQL.GraphQLString
        }
      },
      resolve(root, args) {
        return new Promise(function(resolve){
          Db.tags.byText(args)
          .then(function(data) {
            resolve(data);
          });
        });
      }
    }
  }
});

exports = module.exports = query;
