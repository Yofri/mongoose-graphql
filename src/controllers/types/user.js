import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import {Todo} from '../../models'
import {TodoType} from './'

export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    total: {
      type: GraphQLInt,
      resolve: async root => {
        const todo = await Todo.find({uid: root._id})
        return todo.length
      }
    },
    todos: {
      type: new GraphQLNonNull(new GraphQLList(TodoType)),
      resolve: async root => {
        return await Todo.find({uid: root._id})
      }
    },
    token: {type: GraphQLString}
  })
})

/* const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => ({
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  })
})

export {UserType, UserInputType} */