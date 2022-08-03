const { Sequelize } = require("sequelize");
const db = require("../config/db");

class Favourite extends Sequelize.Model {}

Favourite.init(
  {
    favoriteId: {
      type: Sequelize.DataTypes.INTEGER,
    },

    favouriteTitle: {
      type: Sequelize.DataTypes.STRING,
    },
    poster_path: {
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
    },
    category: {
      type: Sequelize.DataTypes.TEXT,
    },
  },

  { sequelize: db, modelName: "favourite" }
);

module.exports = Favourite;
