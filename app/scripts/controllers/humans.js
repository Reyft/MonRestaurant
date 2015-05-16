'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:HumansCtrl
 * @description
 * # HumansCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('HumansCtrl', ['$scope', 'Human', function ($scope, Human) {
      Human.all(function (humans) { // là on appelle le service : ne renvoie rien en soit
            $scope.theHumans = humans; //on met dans une var globale au scope le résultat de la fonction
          },
          //en 2è arg, la fonction quand c'est un échec
          function (error) {
            $scope.theHumans=[];
            console.log(error); //ici normalement, besoin de gérer les erreurs :
            //par ex on remplit un $scope.error où on donne d'autres infos
          });

      $scope.theBosses = [];
      $scope.theCooks = [];
      $scope.theWaiters = [];

    }]);