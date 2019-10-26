const { Model, DataTypes } = require('sequelize');

const Film = require('./Film');
const Planet = require('./Planet');

class People extends Model {
  static init(sequelize) {
    super.init({
      id: DataTypes.UUID,
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
    });
  }
}

People.hasOne(Planet);
People.belongsToMany(Film, { through: 'film_people' });

export default People;
