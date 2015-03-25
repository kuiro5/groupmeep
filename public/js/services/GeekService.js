angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

	return{
		login : function(){
			return $http.post('https://oauth.groupme.com/oauth/authorize?client_id=CLIENT_ID');

		}
	}
	

}]);