'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {templateUrl: 'partials/questions.html', controller: 'QuestionsCtrl'});
  $routeProvider.when('/', {templateUrl: 'landing-page/index.html', controller: 'LandingCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
