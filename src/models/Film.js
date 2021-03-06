const { Model, DataTypes } = require('sequelize');

class Film extends Model {
  static init(sequelize) {
    super.init({
      id: DataTypes.UUID,
      title: DataTypes.STRING,
      release_date: DataTypes.DATEONLY,
    }, {
      sequelize,
      timestamps: true,
    });
  }
}

export default Film;
