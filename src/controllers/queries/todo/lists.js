import {GraphQLNonNull, GraphQLList} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

module.exports = {
  type: new GraphQLNonNull(
    new GraphQLList(new GraphQLNonNull(TodoType))
  ),
  resolve: async () => {
    return await Todo.find()
  }
}