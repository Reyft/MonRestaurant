'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
