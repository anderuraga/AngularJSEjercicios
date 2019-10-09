(function(){

    var app = angular.module('ejemplosApp',[ ]);
    app.controller('mainCtrl', ['$scope','$http','$timeout', function($scope,$http, $timeout){
    
        $scope.profesores = [];
        $scope.ocultar = false;

        //peticion httpRequest mediante ajax, es ASINCRONA!!!
        console.debug('llamada asincrona');

        $timeout ( function(){

            $http.get('json/profesores.json')
                .success(function(data){
                    console.debug('response OK %o', data);
                    $scope.ocultar = true;
                    $scope.profesores = data.profesores;
                });

        } , 3000);

    

        console.debug('seguimos ejecutando otras sentencias');

    }]);


})();
