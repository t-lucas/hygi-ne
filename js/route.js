 var app = angular.module('playground', ['ngRoute']);
        app.config(function($routeProvider){
            $routeProvider
                    .when('/', {templateUrl: 'template/home.html'})
                    .when('/scene-douche', {templateUrl: 'template/scene-douche.html'})
                    .when('/lavabo', {templateUrl: 'template/lavabo.html'})
                    .when('/representation-hygiene', {templateUrl: 'template/representation-hygiene.html'})
                    .when('/about', {templateUrl: 'template/about.html'})
                    .otherwise({redirectTo: '/'})
        });
        app.controller('LayoutCtrl', function($scope, $log) {
        $log.debug('angular is ready');
      });