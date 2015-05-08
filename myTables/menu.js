/* jshint indent: 2 */
var connection = require('./../myDatabase/connection.js');

exports.schema = connection.sequelize.define('menu', { 
    id: {
      type: connection.Sequelize.STRING,
      allowNull: false,
	  primaryKey: true, 
	unique: true,
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
