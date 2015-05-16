'use strict';

angular.module('restaurantApp')
    .controller('ComCtrl', ['$scope', '$window', '$routeParams', 'Com', function ($scope, $window, $routeParams, Com) {
    	
    	$scope.com = [];

    	$scope.menuId = $routeParams.menuId;

    	// Com.get(coursesId,
    	// 	function (result) {
    	// 		$scope.com = result;
    	// 	},
    	// 	function(error){
    	// 		console.log(error);
    		}]);     
