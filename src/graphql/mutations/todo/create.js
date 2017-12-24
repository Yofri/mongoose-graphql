import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'
import TodoType from '../../types/todo'
import Todo from '../../../models/todo'

export default {
  type: TodoType,
  args: {
    title: {type: new GraphQLNonNull(GraphQLString)},
    task: {type: new GraphQLNonNull(GraphQLString)},
    completed: {type: GraphQLBoolean}
  },
  resolve: (root, args) => {
    return new Promise((resolve, reject) => {
      Todo.create(args, (err, todo) => {
        err ? reject(err) : resolve(todo)
      })
    })
  }
}