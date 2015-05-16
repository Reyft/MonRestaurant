'use strict';

angular.module('restaurantApp')
    .controller('ComCtrl', ['$scope', '$window', '$routeParams', 'Com', function ($scope, $window, $routeParams, Com) {
    	
    	$scope.menuId = $routeParams.menuId;

    	Com.get($scope.menuId,                  // Les commentaires sont automatiquement chargés 
    		function(result){
    			$scope.com = result;
    		},
    		function(error){
    			$scope.com = [];
    			console.log('cette erreur la : '+error);
    		});

    	// $scope.getCom = function(menuId){        Les commentaires sont chargés a l'appelle d'une fonction
    	// 	Com.get(menuId,
    	// 	function(result){
    	// 		$scope.com = result;
    	// 	},
    	// 	function(error){
    	// 		$scope.com = [];
    	// 		console.log('cette erreur la : '+error);
    	// 	});
    	// };

	}]);