'use strict';

/* App Module */

var refstackApp = angular.module('refstackApp', [
  'ngRoute', 
]);

refstackApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: '/components/about/about.html', 
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

