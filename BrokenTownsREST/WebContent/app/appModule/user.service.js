angular.module('appModule')
	  .factory('userService', function($http) {
		  var service = {};
		  
		  var BASE_URL = "api/users/";
		  
		  service.show = function(userId) {
			  return $http({
				  method   :   "GET",
				  url      :  BASE_URL + userId 
			  });
		  };
		  
		  return service;
	  })