'use strict';

/**
 * @ngdoc overview
 * @name restaurantApp
 * @description
 * # restaurantApp
 *
 * Main module of the application.
 */
angular
  .module('restaurantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
      .when('/menus', {
        templateUrl: 'views/menus.html',
        controller: 'MenuCtrl'
      })
      .when('/humans', {
        templateUrl: 'views/humans.html',
        controller: 'HumansCtrl'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .when('/findus', {
        templateUrl: 'views/findus.html',
        controller: 'FindUsCtrl'
      })
      .when('/com/:menuId?', {
        templateUrl: 'views/comm.html',
        controller: 'ComCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
