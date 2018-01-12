'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($rootScope, $scope, $window) {

   	$rootScope.bordercolorchange=function(id1){
   	
   		if(id1 === $rootScope.id) return true;
   		else return false;
   	}

var cnt=0;
     $scope.handleClick = function () {
      cnt++;
      console.log(cnt);
      $scope.$emit('eventName', { message: cnt });
 };




});

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])



.controller('View3Ctrl', [function() {


  


}]);