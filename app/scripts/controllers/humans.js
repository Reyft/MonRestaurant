'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:HumansCtrl
 * @description
 * # HumansCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('HumansCtrl', ['$scope', function ($scope) {
    $scope.Humans = [];
  }]);