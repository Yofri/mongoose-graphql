import {GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

export default {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  },
  resolve: async (root, {id, body}) => {
    return User.findByIdAndUpdate(id, body)
  }
}