import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail'

module.exports = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    validate: {
      validator: isEmail,
      message: '{VALUE} is not a valid email address'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})