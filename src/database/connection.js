const  Sequelize  = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_USERPASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('../model/userModel')(sequelize, Sequelize);

module.exports = db