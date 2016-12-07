PropertyConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function PropertyConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main.property', {
      abstract: true,
      url: '/property',
      template: '<ui-view>'
    })
    .state('main.property.index', {
      url: '',
      resolve: {
        property_data: function(ApiCentral){
          return ApiCentral['property:property_data']();
        }
      },
      template: require('./templates/property.html'),
      controller: 'PropertyCtrl',
      controllerAs: 'pb',
    })

};
