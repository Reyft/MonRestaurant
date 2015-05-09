/**
 * Created by Garance on 08/05/2015.
 */
'use strict';


angular.module('restaurantApp')
    .factory('Menu', ['$http', function ($http) {
        var menuAddress = 'http://garance-remy-ihm.herokuapp.com/api/menus/';
        var obj = {
            add: function(menuInfo, successCB, failCB) {
                $http.post(menuAddress, menuInfo)
                    .success(function (result) {
                        if (result.status === 'success') {
                            //we can also check that the values are what we actually sent
                            successCB(result.data);
                        }
                        else {
                            failCB(result.data);
                        }
                        ;
                    })
                    .error(failCB);
            },
            getFullMenu: function (menuId, successCB, failCB) { //successCB & fail sont des fonctions qu'on appelle avec des params
                $http.get(menuAddress, menuId)
                    .success(function (result) {
                        if (result.status === 'success') {
                            //we can also check that the values are what we actually sent
                            console.log('success');
                            console.log(result.data);
                            successCB(result.data);
                        }
                        else {
                            failCB(result.data);
                        };
                    })
                    .error(failCB()); //en cas d'erreur, on appelle la fonction failCB avec en param la fonction error, qui
                //sera appelée ensuite dans mon controller
                //console.log(error); pas de console log ici

            },
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

            update: function (menuId, newData, successCB, failCB) {
                $http.put(menuAddress + menuId, newData)
                    .success(function (result) {
                        if (result.status === 'success') {
                            //we can also check that the values are what we actually sent
                            successCB(result.data);
                        }
                        else {
                            failCB(result.data);
                        }
                        ;
                    })
                    .error(failCB);
            },
            delete: function (menuId, failCB) {
                $http.delete(menuAddress + menuId)
                    .success(function (result) {
                        if (result.status !== 'success') {
                            failCB(result);
                        }
                        //console.log(Result);
                        //glop
                    })
                    .error(failCB);
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

