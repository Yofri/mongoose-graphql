import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql'
import {Todo} from '../../models'
import TodoType from './todo'

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    total: {
      type: GraphQLInt,
      resolve: async () => {
        return await Todo.find({uid: id}).length
      }
    },
    todos: {
      type: new GraphQLList(TodoType),
      resolve: async () => {
        return await Todo.find({uid: id})
      }
    },
    token: {type: GraphQLString}
  }
})