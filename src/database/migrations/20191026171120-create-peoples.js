'use strict';

const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('peoples', {
      id: {
        type: Sequelize.UUID,
        defaultValue: uuid(),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      planet_id: {
        type: Sequelize.UUID,
        references: {
          model: 'planets',
          key: 'id',
        },
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('peoples');
  }
};
