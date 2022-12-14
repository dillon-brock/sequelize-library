'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Author, {
        through: 'BookAuthors',
      });
      Book.belongsTo(models.Category);
      Book.hasMany(models.Rental, {
        foreignKey: 'BookId',
      });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      pages: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Book',
      createdAt: false,
      updatedAt: false,
    }
  );
  return Book;
};
