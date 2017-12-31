import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'
import {User} from '../../models'
import UserType from './user'

export default new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    completed: {type: new GraphQLNonNull(GraphQLBoolean)},
    user: {
        type: UserType,
        resolve: async () => {
            return await User.find({_id: uid})
        }
    }
  }
})