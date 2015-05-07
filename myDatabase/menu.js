/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', { 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: 'DOUBLE PRECISION',
      allowNull: true,
    },
    starter: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mainDish: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dessert: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
};
