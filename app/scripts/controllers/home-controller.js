'use strict';

angular.module('boilerplateApp')

.controller('homeController', ['$log', '$scope',

    function ($log, $scope) {
        $log.debug('homeController loading');

        $scope.homeTitle = 'Home page';

        $scope.today = new Date();
    }]);
