import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'
import {User} from '../../models'
import {UserType} from './'

export default new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    uid: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    completed: {type: new GraphQLNonNull(GraphQLBoolean)},
    user: {
      type: new GraphQLNonNull(UserType),
      resolve: async root => {
        const user = await User.find({_id: root.uid})
        return user[0]
      }
    }
  })
})

/* const TodoInputType = new GraphQLInputObjectType({
  name: 'TodoInput',
  fields: () => ({
    title: {type: GraphQLString},
    completed: {type: GraphQLBoolean}
  })
})

export {TodoType, TodoInputType} */