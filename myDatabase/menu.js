/* jshint indent: 2 */
var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('menu', { 
    id: {
      type: connection.Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    }
  });
