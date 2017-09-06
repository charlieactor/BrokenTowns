angular.module('appModule').component('navigation', {
	templateUrl : 'app/appModule/navigation.component.html',
	controller : function(authService) {
		var vm = this;
		
		console.log("before check login: " + vm.showLogin);
		
		vm.checkLogin = function() {
			if (authService.getToken().id) {
				return true;
				console.log("inside of check login: "  + vm.showLogin);
			}
			return false;
		}
		
		console.log("After checkLogin: " +vm.showLogin);

	},

	controllerAs : 'vm'
})