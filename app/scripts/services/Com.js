'use strict';

angular.module('restaurantApp')
	.factory('Com', ['$http', function ($http) {
		var add = 'http://garance-remy-ihm.herokuapp.com/api/comments';
		var obj = {
			
			add: function (com, succesCB, failCB) {
				$http.post(add, com)
					.success(function (result){
						if (result.status == success){
							succesCB = result.data;
						} else {
							failCB = result.data;
						};
					})
					.error(failCB);
			},

			get: function(coursesId, succesCB, failCB) {
				$http.get(add + '/' + coursesId)
					.success(function (result){
						if (result.status == success){
							succesCB = result.data;
						} else {
							failCB = result.data;
						};
					})
					.error(failCB);
			},

			delete: function(comId, failCB) {
				$http.delete(add + '/' + comId)
					.success(function(result){
						if (result.status != success){
							failCB = result.data;
						}
					})
					.error(failCB);
			},

			update: function(comId, succesCB, failCB){
				$http.put(add + '/' + comId)
					.success(function(result){
						if (result.status == success){
							succesCB = result.data;
						} else {
							failCB = result.data;
						};
					})
					.error(failCB);
			}

			return obj;

			// Pas besoin du all car le get récupère deja tout les commentaires
			// du même menu
		}
	}])