'use strict';

angular.module('boilerplateApp')

.controller('homeController', ['$log', '$scope','$translate', 'tmhDynamicLocale'

    function ($log, $scope,$translate, tmhDynamicLocale) {
        $log.debug('homeController loading');

        $scope.homeTitle = 'Home page';

        $scope.today = new Date();
    }]);
