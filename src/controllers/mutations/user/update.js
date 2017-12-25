const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql')
const {User} = require('../../../models')
const {UserType, UserInputType} = require('../../types')

module.exports = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    body: {type: UserInputType}
  },
  resolve(root, {id, body}) {
    return User.findByIdAndUpdate(id, body)
      .then(res => res)
      .catch(err => err)
  }
}