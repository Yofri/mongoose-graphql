import mongoose from 'mongoose'

export default mongoose.model('todos', {
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})