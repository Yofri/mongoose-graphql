import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import Todo from './models/todo'
import Schema from './graphql'

mongoose.connect('mongodb://localhost:27017/todo', {useMongoClient: true})
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connection

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/api/todos', async (req, res) => {
  try {
    const todo = await Todo.create(req.body)
    res.status(200).send(todo)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))

db.once('open', () => console.log('Connected to mongoose'))
app.listen(port, () => console.log(`Express listening on port ${port}`))