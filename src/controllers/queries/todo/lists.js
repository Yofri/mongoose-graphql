import {GraphQLList} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

module.exports = {
  type: new GraphQLList(TodoType),
  resolve: async () => {
    return await Todo.find()
  }
}