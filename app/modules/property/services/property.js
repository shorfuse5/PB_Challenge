PropertyFactory.$inject =['$q', '$http', '$rootScope', 'AppConstants'];

export default function PropertyFactory ($q, $http, $rootScope, AppConstants){

	return {
		property_data : function() {
			return $http.get('/json/selling.json').then(function(response) {
				return response.data;
			}, function (reason) {
        console.group('API Failed!');
        console.log(reason);
        console.groupEnd();
        return $q.reject(reason);
      });
		}
	};
};
