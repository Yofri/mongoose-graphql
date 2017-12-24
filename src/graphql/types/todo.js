import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: {type: GraphQLID},
    title: {type: new GraphQLNonNull(GraphQLString)},
    task: {type: new GraphQLNonNull(GraphQLString)},
    completed: {type: new GraphQLNonNull(GraphQLBoolean)}
  }
})