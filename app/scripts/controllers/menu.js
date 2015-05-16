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

        Course.all(function (courses) { // là on appelle le service : ne renvoie rien en soit
                $scope.theCourses = courses; //on met dans une var globale au scope le résultat de la fonction
            },
            //en 2è arg, la fonction quand c'est un échec
            function (error) {
                $scope.theCourses=[];
                console.log(error); //ici normalement, besoin de gérer les erreurs :
                //par ex on remplit un $scope.error où on donne d'autres infos
            });

      //en premier arg, ma fonction quand c'est un succes
      Menu.all(function (menus) { // là on appelle le service : ne renvoie rien en soit
            $scope.theMenus = menus; //on met dans une var globale au scope le résultat de la fonction
          },
          //en 2è arg, la fonction quand c'est un échec
          function (error) {
            $scope.theMenus="No menu is defined in the table yet, or we can't retrive them at the moment. Sorry !";
            console.log(error); //ici normalement, besoin de gérer les erreurs :
            //par ex on remplit un $scope.error où on donne d'autres infos
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