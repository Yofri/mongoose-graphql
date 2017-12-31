import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

module.exports = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: async (root, {id}) => {
    return await User.findById(id)
  }
}