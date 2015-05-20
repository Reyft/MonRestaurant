'use strict';

angular.module('restaurantApp')
    .controller('ComCtrl', ['$scope', '$window', '$routeParams', 'Com', function ($scope, $window, $routeParams, Com) {
    	
    	$scope.menuId = $routeParams.menuId;

    	$scope.com = [];

        $scope.Note = 0;

        $scope.etoile = function(intStar){
            for(var i = 1; i <= intStar; i++){
               var elmt = document.getElementById(i+5);
               elmt.style.color="#4169E1"; 
            }
        }

        $scope.putStar = function(intStar){
            for(var i = 1; i <= 5; i++){
                var elmt = document.getElementById(i);
                elmt.style.color= "#aaa";
            }
            $scope.Note = intStar;
            for(var i = 1; i <= $scope.Note; i++){
                var elmt = document.getElementById(i);
                elmt.style.color="#4169E1";
            }            
        }

        $scope.zero = function(){
            for(var i = 1; i <= 5; i++){
                var elmt = document.getElementById(i);
                elmt.style.color= "#aaa";
            }
            $scope.Note = 0;
        }

    	Com.all($scope.menuId,                  // Les commentaires sont automatiquement chargés 
    		function(result){
    			$scope.coms = result;
    		},
    		function(error){
    			$scope.coms = [];
    			console.log('cette erreur la : '+error);
    		});

		$scope.backToMenus = function() {
			$window.history.back();
		}

    	$scope.addCom = function(newCom){
    		newCom.menuId = $scope.menuId;
            newCom.Note = $scope.Note;
    		Com.add(newCom,
    			function(result){
    				console.log("commentaire ajouter");
    			},
    			function(error){
    				console.log("erreur ajout : "+error);
    			});
    		$window.location.reload();
    	};

    	$scope.getCom = function(ComId){
    		Com.get(ComId,
    			function(result){
    				$scope.com = result;
    			},
    			function(error){
    				console.log("erreur lors du get : "+error);
    			});    		
    	}

    	$scope.updateCom = function(){
            $scope.com.Note = $scope.Note;
    		Com.update($scope.com.id, $scope.com,
    			function(result){
    				console.log("commentaire modifié");
    			},
    			function(error){
    				console.log("erreur lors du update : "+error);
    			});
    		$scope.com = [];
    		$window.location.reload();
    	}

    	$scope.delete = function(){
    		Com.delete($scope.com.id,
    			function(result){
    				console.log("commentaire supprimé");
    			},
    			function(error){
    				console.log("erreur lors de la suppression : "+error);
    			});
    		$scope.com = [];
    		$window.location.reload();
    	}
	}]);