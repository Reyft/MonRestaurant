'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
