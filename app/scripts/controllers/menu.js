'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
    .controller('MenuCtrl', ['$scope', '$window', '$location', 'Menu', 'Course', function ($scope, $window, $location, Menu, Course) {
  /*    $scope.deleteU = function() {
        User.delete($scope.theUId,
            function(error) {
              console.log(error);
            });
        $window.location.reload();
      };

      $scope.getAUser = function (theIdILookFor) {
        //    get: function (userId, successCB, failCB) { //successCB & fail sont des fonctions qu'on appelle avec des params
        User.get(theIdILookFor,
            function (result) {
              $scope.theUserToUpgrade = result;
            },
            function (error) {
              $scope.theUserToUpgrade = 'rate!'; //must deal w/ error
            });
      };


      $scope.updateUser = function () {
        // update: function (userId, newData, successCB, failCB) {
        User.update($scope.theUserToUpgrade.id, $scope.theUserToUpgrade,
            function (result) {
              console.log('made it!\n');
              console.log('the result :  ' + result+ '\n');
              $scope.theUserToUpgrade = result;
            },
            function (error) {
              console.log(error);
              $scope.theUserToUpgrade = 'rate!';
            });

        console.log('result : ' + $scope.theUserToUpgrade+'\n');
        $window.location.reload();
      };
*/

      //en premier arg, ma fonction quand c'est un succes
      Menu.all(function (menus) { // l� on appelle le service : ne renvoie rien en soit
            $scope.theMenus = menus; //on met dans une var globale au scope le r�sultat de la fonction
          },
          //en 2� arg, la fonction quand c'est un �chec
          function (error) {
            $scope.theMenus="No menu is defined in the table yet, or we can't retrive them at the moment. Sorry !";
            console.log(error); //ici normalement, besoin de g�rer les erreurs :
            //par ex on remplit un $scope.error o� on donne d'autres infos
          });

      $scope.getDetailsOfMenu = function(hisId) {
          Menu.getMenuCourses(hisId,
              function (result) {
                  $scope.menuDetails = result;
              },
              function (error) {
                  $scope.menuDetails = []; //must deal w/ error
              });
      };

      $scope.goToComments = function (theMenuIdYouWant) {
            $location.path("/com/"+theMenuIdYouWant);
      };
        //getMenuCourses
        $scope.getThisCourse = function(courseIdIWant) {
            Course.get(courseIdIWant,
                function (result) {
                    $scope.MyCourseIWanted = result;
                },
                function (error) {
                    $scope.MyCourseIWanted = 0; //must deal w/ error
                });
        }
    }

    ]);