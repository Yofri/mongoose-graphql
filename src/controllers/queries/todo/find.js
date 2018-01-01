import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'
import {getProjection} from '../../../utils'

module.exports = {
  type: new GraphQLNonNull(TodoType),
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    const projection = getProjection(fieldASTs)
    return await Todo.findById(id).select(projection)
  }
}