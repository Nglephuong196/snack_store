const db = require('../database/connection')
const User = db.User

class userRepository {
    constructor() {}
    async getAll() {
       const listUser = await User.findAll({  })
       return listUser;
    }
    async create(user) {
        const createdUser = await User.create(user)
        return user
    }
}

module.exports = userRepository