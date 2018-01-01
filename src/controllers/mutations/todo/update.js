import {GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

export default {
  type: new GraphQLNonNull(TodoType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: GraphQLString},
    completed: {type: GraphQLBoolean},
  },
  resolve: async (root, args) => {
    return Todo.findByIdAndUpdate(args.id, args)
  }
}