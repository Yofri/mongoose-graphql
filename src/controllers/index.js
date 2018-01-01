import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'
import {
  allUsers, findUser,
  allTodos, findTodo
} from './queries'
import {
  createUser, updateUser, removeUser, login,
  createTodo, updateTodo, removeTodo
} from './mutations'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      allUsers, findUser,
      allTodos, findTodo
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser, updateUser, removeUser, login,
      createTodo, updateTodo, removeTodo
    }
  })
})