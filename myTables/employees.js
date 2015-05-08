/* jshint indent: 2 */
var connection = require('./../myDatabase/connection.js');

exports.schema = connection.sequelize.define('employees', { 
    id: {
      type: connection.Sequelize.STRING,
      allowNull: false,
	  primaryKey: true, 
	unique: true,
    },
    firstName: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    },
    lastName: {
      type: connection.Sequelize.STRING,
      allowNull: true,
    }
  });
