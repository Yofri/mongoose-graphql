import {
  GraphQLList
} from 'graphql'
import TodoType from '../../types/todo'
import Todo from '../../../models/todo'

export default {
  lists: {
    type: new GraphQLList(TodoType),
    resolve: () => {
      return new Promise((resolve, reject) => {
        Todo.find((err, todos) => {
          err ? reject(err) : resolve(todos)
        })
      })
    }
  }
}