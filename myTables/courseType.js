var connection = require('./../myDatabase/connection.js');

exports.schema = connection.sequelize.define('courseType', {
	name: {type: connection.Sequelize.STRING, }
});