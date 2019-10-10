var app = angular.module('angularApp',['ngRoute','ngSanitize']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  this.$onInit = function(){

    console.log('onInit mainCtrl');
    
    $scope.alerta = {
      "texto" : "Ongi Etorri",
      "clase" : "primary"
    };


    // check para saber si esta el servicio rest levantado
    let url = 'http://localhost:3000/frutas';
    $http.get(url).then(function (result) {
        console.trace('servicio rest funcionando %o', result);
        $scope.alerta = {
          "texto" : "<strong>Yujuuuuu</strong> Esta funcionando Servicio Rest",
          "clase" : "success"
        };


    }).catch(function (response) {
        console.warn('servicio rest fallando %o', response);
        $scope.alerta = {
          "texto" : "<strong>Upssssss</strong> Servicio Rest parado",
          "clase" : "danger"
        };
    });

    

  }//onInit

}]);
