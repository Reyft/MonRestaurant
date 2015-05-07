/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Roles', { 
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};
