/* jshint indent: 2 */
var connection = require('./../myDatabase/connection.js');


exports.schema = connection.sequelize.define('restaurant', { 
    Name: {
      type: connection.Sequelize.STRING,
      allowNull: false,
	  primaryKey: true, 
	  unique: true,
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

