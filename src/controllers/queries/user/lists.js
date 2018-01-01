import {GraphQLNonNull, GraphQLList} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

module.exports = {
  type: new GraphQLNonNull(
    new GraphQLList(new GraphQLNonNull(UserType))
  ),
  resolve: async () => {
    return await User.find()
  }
}