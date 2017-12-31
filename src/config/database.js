import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect('mongodb://localhost/graphql', {useMongoClient: true})
mongoose.Promise = global.Promise
const db = mongoose.connection

export {mongoose, db}