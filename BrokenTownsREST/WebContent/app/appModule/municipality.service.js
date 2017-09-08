angular.module('appModule')
	.factory('municipalityService', function($http) {
		var service = {};
		
		var BASE_URL = "http://localhost:8080/BrokenTownsREST/api/municipalities/";
		
		service.index = function() {
			return $http({
				method  :  "GET",
				url     : BASE_URL
			})
		}
		
		return service;
	})
	