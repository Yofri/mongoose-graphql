import {GraphQLNonNull, GraphQLString, GraphQLID} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

export default {
  type: TodoType,
  args: {
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)}
  },
  resolve: async (root, args) => {
    return await Todo.create(args)
  }
}