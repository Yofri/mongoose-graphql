const {GraphQLList} = require('graphql')
const {User} = require('../../../models')
const {UserType} = require('../../types')

module.exports = {
  type: new GraphQLList(UserType),
  resolve: () => {
    return new Promise((resolve, reject) => {
      User.find((err, users) => {
        err ? reject(err) : resolve(users)
      })
    })
  }
}