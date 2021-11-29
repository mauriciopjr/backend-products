'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      // define association here
    }
  };
  Categorie.init({
    description: DataTypes.STRING,
    percDiscount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categorie',
    tableName: 'categories'
  });
  return Categorie;
};