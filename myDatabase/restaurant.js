/* jshint indent: 2 */
var connection = require('./../database/connection.js');


exports.schema = connection.sequelize.define('restaurant', { 
    Name: {
      type: connection.Sequelize.STRING,
      allowNull: false,
    },
    Address: {
      type: connection.Sequelize.STRING,
      allowNull: false,
    },
    Description: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    },
    Image: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    }
  });

