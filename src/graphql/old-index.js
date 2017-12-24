import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';
import Todo from '../models/todo'

export function getProjection (fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = true;
    return projections;
  }, {});
}

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: {type: GraphQLID},
    title: {type: new GraphQLNonNull(GraphQLString)},
    task: {type: new GraphQLNonNull(GraphQLString)},
    completed: {type: new GraphQLNonNull(GraphQLBoolean)}
  }
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
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
  /* fields: {
    todos: {
      type: new GraphQLList(TodoType),
      args: {
        title: {
          name: 'title',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, {title}, source, fieldASTs) => {
        const projections = getProjection(fieldASTs)
        console.log(fieldASTs)
        return new Promise((resolve, reject) => {
          Todo.find({title}, projections, (err, todos) => {
            err ? reject(err) : resolve(todos)
          })
        })
      }
    }
  } */
})

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    create: {
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
        /* const newTodo = new Todo({
          title: args.title,
          task: args.task,
          completed: args.completed || false
        })
        newTodo.id = newTodo._id
        return new Promise((resolve, reject) => {
          newTodo.save(err => {
            err ? reject(err) : resolve(newTodo)
          })
        }) */
      }
    },
    remove: {
      type: TodoType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve: (root, args) => {
        return new Promise((resolve, reject) => {
          Todo.remove({_id: args.id}, err => {
            err ? reject(err) : resolve()
          })
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})