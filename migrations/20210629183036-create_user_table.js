'use strict';
const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        type: DataTypes.UUID,
        default: Sequelize.UUID,
        primaryKey: true
      },
      name: Sequelize.STRING,
      email: DataTypes.STRING(300),
      avatar: DataTypes.STRING(300),
      gender: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
  }
};
