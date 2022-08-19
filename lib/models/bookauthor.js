'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  BookAuthor.init(
    {
      BookId: DataTypes.INTEGER,
      AuthorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BookAuthor',
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return BookAuthor;
};
