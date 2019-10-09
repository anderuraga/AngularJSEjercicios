var app = angular.module('angularApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";

}]);
