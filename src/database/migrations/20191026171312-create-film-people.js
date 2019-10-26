'use strict';

const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('film_people', {
      id: {
        type: Sequelize.UUID,
        defaultValue: uuid(),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      people_id: {
        type: Sequelize.UUID,
        references: {
          model: 'peoples',
          key: 'id',
        },
        allowNull: false,
      },
      film_id: {
        type: Sequelize.UUID,
        references: {
          model: 'films',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('film_people');
  }
};
