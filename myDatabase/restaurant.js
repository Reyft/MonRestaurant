/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurant', { 
    Name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
