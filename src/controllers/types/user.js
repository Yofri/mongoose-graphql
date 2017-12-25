const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
  }
})

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  }
})

module.exports = {
  UserType,
  UserInputType
}