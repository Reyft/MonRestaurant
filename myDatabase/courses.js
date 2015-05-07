/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('courses', { 
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: 'DOUBLE PRECISION',
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM('Main','Starter','Dessert'),
      allowNull: true,
    }
  });
};
