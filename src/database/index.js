const Sequelize = require('sequelize');

const dbConfigs = require('../config/database');
const Film = require('../models/Film');
const People = require('../models/People');
const Planet = require('../models/Planet');

const connection = new Sequelize(dbConfigs);

Film.init(connection);
People.init(connection);
Planet.init(connection);

module.exports = connection;
