var app = angular.module('angularApp',['ngRoute','ngSanitize']);


/**
 * Servicio para Constantes
 */

 app.constant("servicioConstantes", {
                                      "titulo": "AngularApp",
                                      "idioma": "es-Es",
                                      "version": "1.0",
                                      "autor": "Ander Uraga",
                                      "github": "https://github.com/anderuraga/AngularJSEjercicios"
                                    } );


/**
 * Controlador Principal
 */
app.controller('mainCtrl', ['$scope','$http', 'servicioConstantes',
                           function($scope,$http, servicioConstantes){

  this.$onInit = function(){

    console.log('onInit mainCtrl');
    console.debug('constantes: %o', servicioConstantes);
    
    $scope.constantes = servicioConstantes;

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


