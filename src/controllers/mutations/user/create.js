const {GraphQLNonNull} = require('graphql')
const {User} = require('../../../models')
const {UserType, UserInputType} = require('../../types/user')

module.exports = {
  type: UserType,
  args: {
    body: {type: new GraphQLNonNull(UserInputType)}
  },
  resolve: (root, args) => {
    return User.create(args.body)
      .then(res => res)
      .catch(err => err)
  }
}