/* jshint indent: 2 */
var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('courses', { 
    id: {
      type: connection.Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    },
    image: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    },
    type: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    }
  });