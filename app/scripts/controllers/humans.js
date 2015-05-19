'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:HumansCtrl
 * @description
 * # HumansCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('HumansCtrl', ['$scope', 'Human', 'Course', function ($scope, Human, Course) {
      Human.all(function (humans) { // l� on appelle le service : ne renvoie rien en soit
            $scope.theHumans = humans; //on met dans une var globale au scope le r�sultat de la fonction
          },
          //en 2� arg, la fonction quand c'est un �chec
          function (error) {
            $scope.theHumans=[];
            console.log(error); //ici normalement, besoin de g�rer les erreurs :
            //par ex on remplit un $scope.error o� on donne d'autres infos
          });

      $scope.theBosses = [];
      $scope.theCooks = [];
      $scope.theWaiters = [];


        Course.all(function (courses) { // l� on appelle le service : ne renvoie rien en soit
                $scope.theCourses = courses; //on met dans une var globale au scope le r�sultat de la fonction
            },
            //en 2� arg, la fonction quand c'est un �chec
            function (error) {
                $scope.theCourses=[];
                console.log(error); //ici normalement, besoin de g�rer les erreurs :
                //par ex on remplit un $scope.error o� on donne d'autres infos
            });

    }]);