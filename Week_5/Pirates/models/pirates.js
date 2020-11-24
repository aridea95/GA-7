'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pirates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pirates.init({
    id: DataTypes.SERIAL,
    name: DataTypes.VARCHAR,
    status: DataTypes.VARCHAR,
    haki: DataTypes.VARCHAR
  }, {
    sequelize,
    modelName: 'Pirates',
  });
  return Pirates;
};