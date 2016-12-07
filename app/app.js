import 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import ngMaterial from 'angular-material';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import bootstrap from 'bootstrap';

import pbProperty from './modules/property';

import ApiInterceptor from './api-interceptor';
import ApiCentral from './api-central';

import 'angular-material/angular-material.css';
import './assets/sass/style.scss';

angular.module('pb', [uiRouter, ngCookies, ngMaterial, ngAria, ngAnimate, 'pb.property'])
.config(PBConfig)
.service('ApiInterceptor', ApiInterceptor)
.factory('ApiCentral', ApiCentral)
.constant('AppConstants', {
  'api_path' : 'http://localhost:8080'
})
.run();

PBConfig.$inject = ['$httpProvider', '$urlRouterProvider', '$stateProvider'];

function PBConfig($httpProvider, $urlRouterProvider, $stateProvider) {

  $httpProvider.interceptors.push('ApiInterceptor');
  $urlRouterProvider.when('', '/property');
  $stateProvider
  .state('main', {
    abstract : true,
    views : {
      'main' : {
        template : require('./sourceviews/main.html')
      }
    }
  })
};

pbProperty();
