var Courses = require('../myTables/courses.js'),
Employees = require('../myTables/employees.js'),
EmployeesRole = require('../myTables/employeesRole.js'),
Menu = require('../myTables/menu.js'),
CourseType = require('../myTables/courseType.js'),
Restaurant = require('../myTables/restaurant.js');

exports.init = function() {

CourseType.schema.hasMany(Courses.schema); //un CourseType correspond à différents plats
EmployeesRole.schema.hasMany(Employees.schema); 
Courses.schema.hasMany(Employees.schema);

Menu.schema.hasMany(CourseType.schema);
Menu.schema.hasMany(Courses.schema, {through: CourseType.schema});
Courses.schema.hasMany(Menu.schema, {through: CourseType.schema});
};
