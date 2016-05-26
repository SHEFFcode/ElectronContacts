'use strict';

window.$ = window.jQuery = require('./bower_components/jquery/dist/jquery');

// Declare app level module which depends on views, and components
angular.module('sheffContacts', [
  'ngRoute',
  'firebase',
  'sheffContacts.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
