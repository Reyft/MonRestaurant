'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:FindUsCtrl
 * @description
 * # FindUsCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('FindUsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("assets/json/findus.json")
    	.success(function(data){
    		$scope.findus = data.findus;
    	})
    	.error(function(error) {
    		console.log(error);
    	});
  }]);