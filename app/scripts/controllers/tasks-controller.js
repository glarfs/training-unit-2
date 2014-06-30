'use strict';

angular.module('boilerplateApp')

.controller('taskController', ['$log', '$scope',

    function ($log, $scope) {
        $log.debug('taskController loading');

        $scope.tasks = [
            {
                "name": "Buy milk",
                "done": false
            },
            {
                "name": "Write a novel",
                "done": false
            },
            {
                "name": "Plant a tree",
                "done": false
            }
        ];

        $scope.addTask = function () {
            $scope.tasks.push({
                name: $scope.newTask,
                done: false
            });
            $scope.newTask = '';
        };
    }]);
