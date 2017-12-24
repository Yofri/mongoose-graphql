import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'
import TodoType from '../../types/todo'
import Todo from '../../../models/todo'

export default {
  type: TodoType,
  args: {
    _id: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (root, {_id}) => {
    return new Promise((resolve, reject) => {
      Todo.remove({_id}, (err, todo) => {
        err ? reject(err) : resolve(todo)
      })
    })
  }
}