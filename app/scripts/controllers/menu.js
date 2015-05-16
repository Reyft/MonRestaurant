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

        Course.all(function (courses) { // l� on appelle le service : ne renvoie rien en soit
                $scope.theCourses = courses; //on met dans une var globale au scope le r�sultat de la fonction
            },
            //en 2� arg, la fonction quand c'est un �chec
            function (error) {
                $scope.theCourses=[];
                console.log(error); //ici normalement, besoin de g�rer les erreurs :
                //par ex on remplit un $scope.error o� on donne d'autres infos
            });

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

        $scope.setCourseIdIWant = function(thatCourse) {
            $scope.courseIWant = thatCourse;
        };
        //getMenuCourses
         $scope.getTheCourse = function (theIdYouAskedFor) {
            Course.get(theIdYouAskedFor,
                function (result) {
                    $scope.thatCourse = result;
                    console.log(thatCourse);
                },
                function (error) {
                    $scope.thatCourse = []; //must deal w/ error
                    console.log("error");
                });
        }
    }

    ]);