import {GraphQLList} from 'graphql'
import {User} from '../../../models'
import {UserType} from '../../types'

module.exports = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await User.find()
  }
}