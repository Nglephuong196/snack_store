module.exports = (sequelize, Sequelize) =>  {
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
    });
    return User;
};