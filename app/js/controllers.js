'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('QuestionsCtrl', ['$scope', function($scope) {
    $scope.currentSlide = 1;
    $scope.answerQuestion = function(questionId, answer){
        $scope.currentSlide++;
    }


  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
