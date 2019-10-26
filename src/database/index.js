const Sequelize = require('sequelize');

const dbConfigs = require('../config/database');

const connection = new Sequelize(dbConfigs);

module.exports = connection;
