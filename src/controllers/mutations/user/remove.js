const {
  GraphQLNonNull,
  GraphQLID
} = require('graphql')
const {User} = require('../../../models')
const {UserType, UserInputType} = require('../../types')

module.exports = {
  type: UserType,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: (root, {id}) => {
    return User.findByIdAndRemove(id)
      .then(res => res)
      .catch(err => err)
  }
}