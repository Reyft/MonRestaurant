var connection = require('./../myDatabase/connection.js');

exports.schema = connection.sequelize.define('employeeRole', {
	name: {type: connection.Sequelize.STRING, 
	primaryKey: true, 
	unique: true,}
});