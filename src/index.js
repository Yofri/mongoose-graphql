import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import {mongoose, db} from './config'
import Schema from './controllers'

dotenv.config()
const app = express()

app.use(cors())
app.use('/graphql', morgan('dev'), graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

db.on('error', () => console.log('Error connecting to database'))
db.once('open', () => console.log('Connected to database'))
app.listen(3000, () => console.log('Express listening on port 3000'))