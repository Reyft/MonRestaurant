'use strict';

angular.module('restaurantApp')
    .controller('ComCtrl', ['$scope', '$window', 'Com', function ($scope, $window, Com) {
    	
    	Com.get(function (coursesId, result){
    		$scope.com = result;
    	},
    		function(error){
    		console.log();
    	})
    };