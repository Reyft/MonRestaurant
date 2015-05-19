'use strict';

/**
 * @ngdoc function
 * @name restaurantApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restaurantApp
 */
angular.module('restaurantApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
        angular.element(document).ready(function(){
            angular.element('.bxslider').bxSlider({
                mode : 'fade',
                auto:true,
                adaptiveHeight: true
            });
        });
    }]);
