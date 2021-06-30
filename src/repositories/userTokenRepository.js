const db = require('../database/connection')
const UserToken = db.userToken
const jwt = require('jsonwebtoken')

class userRepository {
    constructor() {}
    async generateAuthToken(user) {
        const jwtToken = jwt.sign({ id: user.id.toString() }, process.env.JWT_SECRET)

        let token = UserToken.create({ token: jwtToken })
        return token;
    }
    async removeTokenByValue(token) {
        let tokenInDb = await UserToken.findOne({ token: token })

        return await UserToken.destroy({
            where: { id: tokenInDb.id }
          });
    }
}

module.exports = userRepository