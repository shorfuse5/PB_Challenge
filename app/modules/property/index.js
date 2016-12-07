import 'angular';

// config etc
import PropertyConfig from './routes';

//services
import PropertyFactory from './services/property.js'

//controlelrs
import PropertyCtrl from './controllers/property-controller';

export default () => {

  'use strict';

  angular.module('pb.property', [])
  .config(PropertyConfig)
  .factory('PropertyFactory', PropertyFactory)
	.controller('PropertyCtrl', PropertyCtrl);
}
