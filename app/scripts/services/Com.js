'use strict';

angular.module('restaurantApp')
	.factory('Com', ['$http', function ($http) {
		var comments = 'http://garance-remy-ihm.herokuapp.com/api/comments';
		var menus = 'http://garance-remy-ihm.herokuapp.com/menus'
		var obj = {
			
			add: function (objet, succesCB, failCB) {
				$http.post(comments, objet)
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
				$http.get(menus + '/' + coursesId + '/comments')
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
				$http.delete(comments + '/' + comId)
					.success(function(result){
						if (result.status != success){
							failCB = result.data;
						}
					})
					.error(failCB);
			},

			update: function(comId, objet, succesCB, failCB){
				$http.put(comments + '/' + comId, objet)
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