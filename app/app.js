 'use strict';

 // Declare app level module which depends on views, and components
 var app = angular.module('myApp', [
     'ngRoute',
     'myApp.vinayak',
     'myApp.view2',
     'myApp.view3',
     'myApp.version'
 ])


 app.controller('mycontroller', function($rootScope, $scope, $http) {
     $http.get('jsonfile1.json')
         .then(function(response) {
             $rootScope.jsonFile = response.data;
             //console.log($rootScope.jsonFile);
         });

          $scope.$on('eventName', function (event, args) {
 $scope.message = args.message;
 console.log($scope.message);
 });


});

 app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
     //$locationProvider.html5Mode(true);
     //console.log($locationProvider);
     //console.log($routeProvider);

     $locationProvider.hashPrefix('!');


 }]);
