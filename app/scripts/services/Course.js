/**
 * Created by Garance on 09/05/2015.
 */

/**
 * Created by Garance on 08/05/2015.
 */
'use strict';


angular.module('restaurantApp')
    .factory('Course', ['$http', function ($http) {
        var courseAddress = 'http://garance-remy-ihm.herokuapp.com/api/courses/';
        var obj = {
            add: function(courseInfo, successCB, failCB) {
                $http.post(courseAddress, courseInfo)
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
            get: function (courseId, successCB, failCB) { //successCB & fail sont des fonctions qu'on appelle avec des params
                $http.get(courseAddress + courseId)
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
            update: function (courseId, newData, successCB, failCB) {
                $http.put(courseAddress + courseId, newData)
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
            delete: function (courseId, failCB) {
                $http.delete(courseAddress + courseId)
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
                $http.get(courseAddress)
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

