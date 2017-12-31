import {GraphQLNonNull, GraphQLID} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

export default {
  type: TodoType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await Todo.findByIdAndRemove(id)
  }
}