const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const Schema = require('./controllers')

mongoose.connect('mongodb://localhost:27017/todo', {useMongoClient: true})
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connection

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

db.once('open', () => console.log('Connected to mongoose'))
app.listen(port, () => console.log(`Express listening on port ${port}`))