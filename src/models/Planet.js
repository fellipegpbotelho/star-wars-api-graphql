const { Model, DataTypes } = require('sequelize');

class Planet extends Model {
  static init(sequelize) {
    super.init({
      id: DataTypes.UUID,
      name: DataTypes.STRING,
      population: DataTypes.INTEGER,
    }, {
      sequelize,
      timestamps: true,
    });
  }
}

export default Planet;
