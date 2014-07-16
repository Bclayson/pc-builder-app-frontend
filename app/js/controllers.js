'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('QuestionsCtrl', ['$scope', 'questionData', function ($scope, questionData) {
        $scope.currentSlide = 1;
        $scope.answerQuestion = function (question, answer) {
            questionData[question] = answer;
            $scope.routeQuestion(question, answer);
        };
        $scope.routeQuestion = function (question, answer) {
            if (question == 'budget') {
                if (answer == '600') {
                    $scope.currentSlide = 7;
                }

                else if (answer == '800') {
                    $scope.currentSlide = 9;
                }

                else if (answer == '1000') {
                    $scope.currentSlide = 9;
                }

                else if (answer == '1200+') {
                    $scope.currentSlide = 2;
                }

            }

            else if (question == 'watercooler') {
                $scope.currentSlide = 3;
            }

            else if (question == 'overclocking') {
                if (questionData['budget'] == '1000') {
                    if (answer == 'Yes') {
                        $scope.currentSlide = 2;
                    }

                    else if (answer == 'No') {
                        $scope.currentSlide = 3;
                    }
                }
                else if (questionData['budget'] == '800') {
                    $scope.currentSlide = 7;
                }

            }


            else if (question == 'resolution') {
                $scope.currentSlide = 4;
            }

            else if (question == 'oculus_rift') {
                $scope.currentSlide = 5;
            }

            else if (question == 'video_editing') {
                if (questionData['budget'] == '1000') {
                    $scope.currentSlide = 6;
                }
                else if (questionData['budget'] == '1200+') {
                    $scope.currentSlide = 10;
                }
            }

            else if (question == 'sound_card') {
                $scope.currentSlide = 7;
            }


            else if (question == 'hdd') {
                if (questionData['budget'] == '1000') {
                    $scope.currentSlide = 8;
                }
                else if (questionData['budget'] == '800' || '600') {
                    $scope.currentSlide = 10;
                }
            }


            else if (question == 'ssd') {
                $scope.currentSlide = 10;
            }

        }
    }])
    .controller('LandingCtrl', ['$scope', function ($scope) {

    }])


    .controller('ResultsCtrl', ['$scope', 'Restangular', 'questionData', function ($scope, Restangular, questionData) {
        if (angular.equals({}, questionData)) {
            questionData = {
                budget: "1200+",
                oculus_rift: "Yes",
                resolution: ">1 1920x1200",
                video_editing: "Yes",
                watercooler: "Yes"
            }
        }
        Restangular.all('results').customPOST(questionData).then(function (computers) {
            $scope.computers = computers;

        })
    }]);