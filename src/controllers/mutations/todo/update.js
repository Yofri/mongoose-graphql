import {GraphQLNonNull, GraphQLID, GraphQLString, GraphQLID} from 'graphql'
import {Todo} from '../../../models'
import {TodoType} from '../../types'

export default {
  type: TodoType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    body: {
      title: {type: GraphQLString},
      completed: {type: GraphQLBoolean}
    }
  },
  resolve: async (root, {id, body}) => {
    return User.findByIdAndUpdate(id, body)
  }
}