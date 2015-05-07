/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM('boss','cook','waiter'),
      allowNull: true,
    },
    favPlate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
