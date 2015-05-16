'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:PicturesCtrl
 * @description
 * # PicturesCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('PicturesCtrl', ['$scope', function ($scope) {
    
    $scope.Pictures = [];

      angular.element(document).ready(function(){
        angular.element('.bxslider').bxSlider({
          mode : 'fade',
          auto:true,
          adaptiveHeight: true
        });
      });
  }]);