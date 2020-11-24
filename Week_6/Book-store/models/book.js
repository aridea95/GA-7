'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    title: DataTypes.VARCHAR,
    author: DataTypes.VARCHAR,
    release_date: DataTypes.DATE,
    pages: DataTypes.INTEGER,
    genres: DataTypes.VARCHAR
  }, 
  {
    sequelize,
    modelName: 'Books',
  });
  return Book;
};