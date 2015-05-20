/**
 * Created by Garance on 08/05/2015.
 */
'use strict';


angular.module('restaurantApp')
    .factory('Menu', ['$http', function ($http) {
        var menuAddress = 'http://garance-remy-ihm.herokuapp.com/api/menus/';
        var obj = {

            getMenuCourses: function (menuId, successCB, failCB) {
                $http.get(menuAddress + menuId+'/courseTypes')
                    .success(function (result) {
                        if (result.status === 'success') {
                            //we can also check that the values are what we actually sent
                            successCB(result.data);
                        }
                        else {
                            failCB(result.data);
                        };
                    })
                    .error(failCB());
            },

            all: function (successCB, failCB) {
                //on les appelle comme on veut
                $http.get(menuAddress)
                    .success(function (result) {
                        if (result.status === 'success') { //on parse le json déjà, pour voir ce qu'il répond
                            successCB(result.data);
                        }
                        else {
                            failCB(result.data)
                        }
                        ;
                    })
                    .error(failCB);
            }
        };
        return obj;
    }]);

