var Courses = require('../myDatabase/courses.js'),
Employees = require('../myDatabase/employees.js'),
Menu = require('../myDatabase/menu.js'),
CourseType = require('../myDatabase/courseType.js'),
Restaurant = require('../myDatabase/restaurant.js');

exports.init = function() {
Courses.schema.hasMany(Employees.schema, {through: Employees}); //A course belong to a menu (the same course can go to several menus

Menu.schema.hasMany(CourseType.schema); // a menu has different types of courses
Menu.schema.hasMany(Courses.schema, {through: CourseType.schema});

CourseType.schema.belongsTo(Menu.schema);
Courses.schema.belongsTo(CourseType.schema);

Courses.schema.belongsToMany(Menu.schema, {through: 'MenuCourses.schema'});
Menu.schema.belongsToMany(Courses.schema, {through: 'MenuCourses.schema'});
};
