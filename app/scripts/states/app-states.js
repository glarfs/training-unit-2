//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('App')

.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        ///////////////////////////////
        // 1-Redirects and Otherwise //
        ///////////////////////////////

        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        $urlRouterProvider.otherwise('/home');

        //////////////////////////
        // 2-State Configurations
        //////////////////////////

        // We must configure states using $stateProvider.
        $stateProvider

        .state("home", {

            // Use a url of "/" to set a states as the "index".
            url: "/home",
            templateUrl: 'views/home.html'
        });
}]);
