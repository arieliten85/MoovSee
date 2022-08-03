const User = require("./User");
const Favourite = require("./Favourite");

User.hasMany(Favourite, {
  foreignKey: "userId",
});
Favourite.belongsTo(User);

module.exports = { User, Favourite };
