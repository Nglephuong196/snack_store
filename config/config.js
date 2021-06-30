const fs = require('fs');

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'snack_store',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_USERPASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: 3306,
    dialect: 'mysql',
  }
}