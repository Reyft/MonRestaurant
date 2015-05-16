/**
 * Created by Garance on 16/05/2015.
 */
/**
 * Created by Garance on 08/05/2015.
 */
'use strict';


angular.module('restaurantApp')
    .factory('Human', ['$http', function ($http) {
        var humanAddress = 'http://garance-remy-ihm.herokuapp.com/api/employees/';
        var obj = {
            all: function (successCB, failCB) {
                //on les appelle comme on veut
                $http.get(humanAddress)
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


