'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'restangular'

]).config(['$routeProvider', "RestangularProvider", function ($routeProvider, RestangularProvider) {
    $routeProvider.when('/questions', {templateUrl: 'partials/questions.html', controller: 'QuestionsCtrl'});
    $routeProvider.when('/results', {templateUrl: 'partials/results.html', controller: 'ResultsCtrl'});
    $routeProvider.when('/', {templateUrl: 'partials/landing_page.html', controller: 'LandingCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
    RestangularProvider.setBaseUrl('http://localhost:9001')
}]);