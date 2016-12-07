ApiInterceptor.$inject = ['$rootScope', '$q', '$location'];

export default function ApiInterceptor($rootScope, $q, $location) {
  let vm = this;

  vm.responseError = function(response) {
    console.log('Issue with request, response error: ' + response.status);
    return $q.reject(response);
  }
}
