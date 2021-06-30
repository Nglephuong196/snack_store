const bcrypt = require('bcryptjs')

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING(300),
        avatar: Sequelize.STRING(300),
        gender: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        password: {
            type: Sequelize.STRING
        }
    });

    User.beforeSave(async (user, options) => {
        console.log(user)
        if (user.dataValues.password != user._previousDataValues.password) {
            const hashedPassword = await bcrypt.hash(user.dataValues.password, 8);
            user.password = hashedPassword;
        }
    });

    return User;
};