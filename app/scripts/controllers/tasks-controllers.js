'use strict';

angular.module('App.Controllers')

.controller('tasksController', ['$scope', '$timeout',
        function ($scope, $timeout) {

        $scope.addTask = function () {

            if (!$scope.newTask) {
                return;
            }

            $scope.tasks.push({
                title: $scope.newTask,
                done: false
            });
            $scope.newTask = null;

            $scope.tasks.put();
        };

        $scope.taskKeyPressed = function ($event) {

            if ($event.keyCode === 13) {
                $scope.addTask();
            }
        };

        $scope.deleteTask = function (taskTitle) {

            angular.forEach($scope.tasks, function (task, index) {
                if (task.title === taskTitle) {
                    $scope.tasks.splice(index, 1);
                    return;
                }
            });

            $scope.deletingTask = true;

            $scope.tasks.put().then(function () {
                $scope.deletingTask = false;
                $scope.deleteTaskSuccess = true;
                $timeout(function () {
                    $scope.deleteTaskSuccess = false;
                }, 2000);
            }, function () {
                $scope.deletingTask = false;
                $scope.deleteTaskError = true;
            });
        };

    }]);
