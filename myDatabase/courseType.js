var connection = require('./../database/connection.js');

exports.schema = connection.sequelize.define('courseType', {
	name: {type: connection.Sequelize.STRING}
});