import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'
import {listUsers, findUser} from './queries'
import {createUser, updateUser, removeUser, login} from './mutations'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      listUsers, findUser
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser, updateUser, removeUser, login
    }
  })
})