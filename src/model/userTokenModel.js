module.exports = (sequelize, Sequelize) =>  {
    const UserToken = sequelize.define("UserToken", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: Sequelize.UUID,
        },
        token: {
            type: Sequelize.STRING
        }
    });
    return UserToken;
};