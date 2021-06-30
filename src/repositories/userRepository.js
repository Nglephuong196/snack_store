const db = require('../database/connection')
const User = db.user
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class userRepository {
    constructor() {}
    async getAll() {
       const listUser = await User.findAll({  })
       return listUser;
    }
    async getAllByConditions(conditions) {
        const listUser = await User.findAll({ where : conditions})
        return listUser;
    }
    async create(user) {
        const createdUser = await User.create(user)
        return createdUser
    }
    async getById(id) {
        const user = await User.findOne({ where: { id: id } })
        return user
    }
    async findByCredentials(email, password) {
        const user = await User.findOne({where: { email: email }})
        if (!user) {
            throw new Error('Unable to login')
        }
        const isMatch = await bcrypt.compare(password, user.password)
    
        if (!isMatch) {
            throw new Error('Unable to login')
        }
        return user
    }
}

module.exports = userRepository