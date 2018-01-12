'use strict';

angular.module('myApp.vinayak', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/vinayak', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function($rootScope, $scope, $window) {



        $rootScope.send = function(msg,id) {
           $rootScope.imgurl=msg;
           $rootScope.id=id;
        }
        $scope.sauces = $rootScope.jsonFile['list'];



$rootScope.clickclosebtn=function(id)
{
	console.log("cool");
   var temp=document.getElementById('encrypted'+id);
   temp.parentNode.removeChild( temp );
   //temp.deleteelement;
}





});