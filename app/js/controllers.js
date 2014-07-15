'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('QuestionsCtrl', ['$scope', function($scope) {
    $scope.currentSlide = 1;
    $scope.answerQuestion = function(questionId, answer){
        $scope.currentSlide++;
    }


  }])
  .controller('LandingCtrl', ['$scope', function($scope) {

  }])

  .controller('ResultsCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    Restangular.one('computer').customPOST({
      'budget' : 1000
    }).then(function(data) {
        $scope.data = data;

    })
  }]);