import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

module.exports = {
  type: TodoType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await Todo.findById(id)
  }
}